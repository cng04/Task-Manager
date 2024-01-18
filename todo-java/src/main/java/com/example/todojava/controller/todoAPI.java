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
        return tasksRepository.findAllByOrderByPriorityAsc();
    }

    @GetMapping("/Tasks/{priority}")
    public Task getTaskbyPriority(@PathVariable String priority) {
        Optional<Task> task = tasksRepository.findByPriority(Integer.valueOf(priority));

        if (task.isPresent()) {
            return task.get();
        } else {
            return null;
        }
    }

    // Post APIs
    @PostMapping("/addTask")
    public Task addTask(@RequestBody Task task) {
        return tasksRepository.saveAndFlush(task);
    }

    // Delete APIs
    @DeleteMapping("/delete")
    public String deleteAllTasks() {
        tasksRepository.deleteAll();

        return "All Tasks Deleted";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteTask(@PathVariable String id) {
        tasksRepository.deleteById(Long.valueOf(id));

        return "All Tasks Deleted";
    }
}
