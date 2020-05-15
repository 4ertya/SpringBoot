package org.example.myApp.repos;

import org.example.myApp.domain.Message;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MessageRepo extends CrudRepository<Message, Integer> {

    List<Message>findByTag(String text);
}
