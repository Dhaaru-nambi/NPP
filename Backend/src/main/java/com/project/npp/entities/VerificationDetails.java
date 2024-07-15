package com.project.npp.entities;
 
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
public class VerificationDetails {
	
	private Long phoneNumber ;
	
	private Boolean customerIdentityVerified;
	
	private Boolean noOutstandingPayments;
	
	private Integer timeSinceLastPort;
	
	private NumberStatus numberStatus;
	
	private Integer contractualObligationsMet;
	
	private Boolean notificationToCurrentOperator; 
}