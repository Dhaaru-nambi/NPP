package com.project.npp.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer customerId;
	
	private String username;
	
	private String name;
	
	private String email;
	
	private Long  phoneNumber;
	
	@ManyToOne
	@JoinColumn(name="current_operator_id")
	private Operator currentOperator;
	
	@ManyToOne
	@JoinColumn(name="new_operator_id")
	private Operator newOperator;
	
	@Enumerated(EnumType.STRING)
	private Status status;
}
