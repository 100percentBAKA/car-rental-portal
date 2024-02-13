package com.carrentalportal.backend.entities.booking;

import com.carrentalportal.backend.entities.User;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @CreationTimestamp
    private LocalDateTime bookingCreationTime;
    private LocalDate pickUpDate;
    private LocalDate dropOffDate;
    @Enumerated(EnumType.STRING)
    private BookingStatus status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Booking() {}

    public Booking(Long id, LocalDateTime bookingCreationTime, LocalDate pickUpDate, LocalDate dropOffDate, BookingStatus status) {
        this.id = id;
        this.bookingCreationTime = bookingCreationTime;
        this.pickUpDate = pickUpDate;
        this.dropOffDate = dropOffDate;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getBookingCreationTime() {
        return bookingCreationTime;
    }

    public void setBookingCreationTime(LocalDateTime bookingCreationTime) {
        this.bookingCreationTime = bookingCreationTime;
    }

    public LocalDate getPickUpDate() {
        return pickUpDate;
    }

    public void setPickUpDate(LocalDate pickUpDate) {
        this.pickUpDate = pickUpDate;
    }

    public LocalDate getDropOffDate() {
        return dropOffDate;
    }

    public void setDropOffDate(LocalDate dropOffDate) {
        this.dropOffDate = dropOffDate;
    }

    public BookingStatus getStatus() {
        return status;
    }

    public void setStatus(BookingStatus status) {
        this.status = status;
    }
}
