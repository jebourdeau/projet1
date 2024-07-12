package com.example.projet1.Models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NonNull;

import java.util.List;

@Entity
@Data
@Table(name = "produits")
public class Produits {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @NonNull
    private String name;
    private float price;
    private Integer Quantity;

    @OneToMany
    private List<Panier> parnier;
    public Produits(){};
}
