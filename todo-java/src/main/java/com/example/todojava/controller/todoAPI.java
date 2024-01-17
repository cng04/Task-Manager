package com.example.todojava.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todojava.database.TasksRepository;
import com.example.todojava.database.entity.Task;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@Slf4j
@RequestMapping("/todo")
public class todoAPI {
    @Autowired
    private TasksRepository tasksRepository;

    // Get APIs
    @GetMapping("/Tasks")
    public List<Task> getTasks() {
        return tasksRepository.findAll();
    }

    @GetMapping("/Tasks/{id}")
    public Task getTaskbyId(@RequestParam String id) {
        Optional<Task> task = tasksRepository.findById(Long.valueOf(id));

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
    @DeleteMapping("/deleteAll")
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
