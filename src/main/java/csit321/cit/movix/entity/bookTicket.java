package csit321.cit.movix.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "book_ticket")
@Data
public class bookTicket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "no_of_tickets_available")
    private Integer noOfTicketsAvailable;

    @Column(name = "movie_name")
    private String movieName;

    @Column(name = "show_no")
    private Integer showNo;

    @Column(name = "date")
    private LocalDateTime date;

    @Column(name = "time")
    private LocalDateTime time;

    @Column(name = "venue")
    private String venue;
}