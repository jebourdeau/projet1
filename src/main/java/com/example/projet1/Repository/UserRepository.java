package com.example.projet1.Repository;

import com.example.projet1.Models.Users;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer>{
    public Optional<Users> findByUsername(String username);
    public Optional<Users> findByUsernameAndPassword(String username, String password);

}
