package csit321.cit.movix.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "visitor")
@Data
public class visitor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;
}