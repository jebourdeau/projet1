package com.example.projet1.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "panier")
public class Panier {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @ManyToMany
    private List<Produits> produits = new ArrayList<>();
    @ManyToOne
    private Users users;
    private String deleteProduits;

    public Panier(){};
}
