package com.example.projet1.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "Commande")

public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @ManyToOne
    private  Users users;
    private List<Produits> produits;

    public Commande(){};
}
