package com.example.todojava.database;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todojava.database.entity.Task;
import java.util.List;
import java.util.Optional;


public interface TasksRepository extends JpaRepository<Task, Long> {
   //Optional<Task> findByPriority(int priority);

    List<Task> findAllByOrderByPriorityAsc();
}
