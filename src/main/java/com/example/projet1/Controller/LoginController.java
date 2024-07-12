package com.example.projet1.Controller;

import com.example.projet1.Models.Users;
import com.example.projet1.Repository.UserRepository;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.InputMismatchException;

@RestController
public class LoginController {
    private final UserRepository userRepository;
    public LoginController(UserRepository userRepository){
        this.userRepository = userRepository;
    }
@PostMapping ("/login")
public Users createUser(
        @ModelAttribute("username") String username,
        @ModelAttribute("password") String password
        ) throws Exception{
    return userRepository.findByUsernameAndPassword(username, password).orElseThrow(
            ()-> new Exception("check credential")
    );
}
@PostMapping("/register")
    public Users createUser(
            @ModelAttribute("username") String username,
            @ModelAttribute("password") String password,
            @ModelAttribute("passwordConfirm") String passwordConfirm,
            @ModelAttribute("email") String email)
            {
                if (password.equals(passwordConfirm)){
                    Users users = new Users(username);
                    users.setEmail(email);
                    users.setPassword(password);
                    return userRepository.save(users);
                }else{throw new InputMismatchException(" Password didn't match!!!!");

            }
    }
}
