package com.carrentalportal.backend.entities;

import com.carrentalportal.backend.entities.vehicle.Vehicle;
import jakarta.persistence.*;

@Entity
public class Reviews {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // implement validation
    @Column(nullable = false)
    private String reviews;

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;
}
