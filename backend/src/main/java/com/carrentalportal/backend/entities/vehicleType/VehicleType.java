package com.carrentalportal.backend.entities.vehicleType;

import com.carrentalportal.backend.entities.vehicle.Vehicle;
import jakarta.persistence.*;

@Entity
public class VehicleType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private CarType carType;

    @OneToOne(mappedBy = "vehicleType")
    private Vehicle vehicle;

    public VehicleType() {}

    public VehicleType(Long id, CarType carType) {
        this.id = id;
        this.carType = carType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CarType getCarType() {
        return carType;
    }

    public void setCarType(CarType carType) {
        this.carType = carType;
    }
}
