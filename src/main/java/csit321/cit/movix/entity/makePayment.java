package csit321.cit.movix.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "make_payment")
@Data
public class makePayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentPk;

    @Column(name = "id", length = 100)
    private String id;

    @Column(name = "amount")
    private Float amount;

    @Column(name = "transaction_id")
    private Integer transactionId;

    @Column(name = "user_id", length = 50)
    private String userId;
}