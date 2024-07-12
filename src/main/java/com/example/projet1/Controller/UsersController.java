package com.example.projet1.Controller;

import com.example.projet1.Models.Users;
import com.example.projet1.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/")
public class UsersController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }
    @GetMapping("/{userId}")
    public Optional<Users> getOneUsers(@PathVariable Integer userId){
        return userRepository.findById((userId));
    }

    @PostMapping
    public Users createUser(@RequestBody Users users){
        Users newUsers = new Users(users.getUsername());
        return  userRepository .save (newUsers);
    }



}
