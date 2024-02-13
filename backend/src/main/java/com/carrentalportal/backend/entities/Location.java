package com.carrentalportal.backend.entities;

import com.carrentalportal.backend.entities.vehicle.Vehicle;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String location_name;

    @ManyToMany(mappedBy = "locations")
    private List<Vehicle> vehicles;

    public Location () {

    }

    public Location(Long id, String location_name) {
        this.id = id;
        this.location_name = location_name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation_name() {
        return location_name;
    }

    public void setLocation_name(String location_name) {
        this.location_name = location_name;
    }
}
