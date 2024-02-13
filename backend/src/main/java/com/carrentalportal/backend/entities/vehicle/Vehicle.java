package com.carrentalportal.backend.entities.vehicle;

import com.carrentalportal.backend.entities.Location;
import com.carrentalportal.backend.entities.booking.Booking;
import com.carrentalportal.backend.entities.vehicleType.VehicleType;
import jakarta.persistence.*;
import java.time.Year;
import java.util.List;

@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private Fuel fuel_type;
    private boolean ac;
    private int seater;
    private Year model_year;

    @OneToMany
    @JoinColumn(name = "booking_id", referencedColumnName = "id")
    private List<Booking> booking;

    @OneToOne
    @JoinColumn(name = "vehicle_type_id")
    private VehicleType vehicleType;

    @ManyToMany
    @JoinTable(
            name = "vehicle_location",
            joinColumns = @JoinColumn(name = "vehicle_id"),
            inverseJoinColumns = @JoinColumn(name = "location_id")
    )
    private List<Location> locations;


    public Vehicle () {}

    public Vehicle(Long id, Fuel fuel_type, boolean ac, int seater, Year model_year) {
        this.id = id;
        this.fuel_type = fuel_type;
        this.ac = ac;
        this.seater = seater;
        this.model_year = model_year;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Fuel getFuel_type() {
        return fuel_type;
    }

    public void setFuel_type(Fuel fuel_type) {
        this.fuel_type = fuel_type;
    }

    public boolean isAc() {
        return ac;
    }

    public void setAc(boolean ac) {
        this.ac = ac;
    }

    public int getSeater() {
        return seater;
    }

    public void setSeater(int seater) {
        this.seater = seater;
    }

    public Year getModel_year() {
        return model_year;
    }

    public void setModel_year(Year model_year) {
        this.model_year = model_year;
    }
}
