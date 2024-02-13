package com.carrentalportal.backend.entities;

import jakarta.persistence.*;

@Entity
public class Detail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String dl;

    @Column(unique = true, nullable = false)
    private String aadhar;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Detail () {}

    public Detail(Long id, String dl, String aadhar) {
        this.id = id;
        this.dl = dl;
        this.aadhar = aadhar;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDl() {
        return dl;
    }

    public void setDl(String dl) {
        this.dl = dl;
    }

    public String getAadhar() {
        return aadhar;
    }

    public void setAadhar(String aadhar) {
        this.aadhar = aadhar;
    }
}
