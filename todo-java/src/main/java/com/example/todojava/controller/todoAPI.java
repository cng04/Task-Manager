package com.example.todojava.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todojava.database.TasksRepository;
import com.example.todojava.database.entity.Task;

import ch.qos.logback.core.rolling.helper.IntegerTokenConverter;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


// Allows sharing of resources with the specified origins
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@Slf4j
@RequestMapping("/todo")
public class todoAPI {
    @Autowired
    private TasksRepository tasksRepository;

    // Get APIs
    // Finds all Tasks and sorts them in ascending order based on priority
    @GetMapping("/Tasks")
    public List<Task> getTasks() {
        reOrderPriority();
        return tasksRepository.findAllByOrderByPriorityAsc();
    }

    // Reorders priority of tasks
    public void reOrderPriority() {
        long count = 1;

        for (Task task : tasksRepository.findAll()) {
            //log.info(task.getPriority());
            task.setPriority(Long.toString(count));
            count++;
        }

    }

    // Gets a specific task by id
    @GetMapping("/Tasks/{id}")
    public Task getTaskById(@PathVariable String id) {
        Optional<Task> task = tasksRepository.findById(Long.valueOf(id));

        if (task.isPresent()) {
            return task.get();
        } else {
            return null;
        }
    }

    // Post APIs
    // Adds a task
    @PostMapping("/Tasks")
    public Task addTask(@RequestBody Task task) {
        return tasksRepository.saveAndFlush(task);
    }

    // Put API
    // Edits a task
    @PutMapping("Tasks/{id}")
    public Task editTask(@PathVariable String id, @RequestBody Task newTask) {
        Optional<Task> tsk = tasksRepository.findById(Long.valueOf(id));
        Task task = tsk.get();

        if (tsk.isPresent()) {
            task.setPriority(newTask.getPriority());
            task.setTitle(newTask.getTitle());
            task.setCategory(newTask.getCategory());
            task.setDescription(newTask.getDescription());
            task.setDate(newTask.getDate());
            return tasksRepository.save(task);
        } else {
            return tasksRepository.saveAndFlush(newTask);
        }
        
    }

    // Delete APIs
    // Deletes all tasks
    @DeleteMapping("/Tasks")
    public void deleteAllTasks() {
        tasksRepository.deleteAll();
    }

    // Deletes a specific task
    @DeleteMapping("/Tasks/{id}")
    public void deleteTask(@PathVariable String id) {
        tasksRepository.deleteById(Long.valueOf(id));
    }
}
