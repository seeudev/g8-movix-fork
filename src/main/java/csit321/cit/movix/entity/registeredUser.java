package csit321.cit.movix.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "registered_user")
@Data
public class registeredUser {

    @Id
    @Column(name = "id", length = 50)
    private String id;

    @Column(name = "name", length = 100)
    private String name;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "address")
    private String address;
}