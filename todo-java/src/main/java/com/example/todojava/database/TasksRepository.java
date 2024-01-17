package com.example.todojava.database;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todojava.database.entity.Task;

public interface TasksRepository extends JpaRepository<Task, Long> {
    
}
