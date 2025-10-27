package csit321.cit.movix.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "movie")
@Data
public class movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "movie_name")
    private String movieName;

    @Column(name = "movie_show")
    private LocalDateTime movieShow;

    @Column(name = "time", length = 20)
    private String time;

    @Column(name = "venue")
    private String venue;
}