package com.project.npp.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.npp.entities.AirtelVerificationDetails;
import com.project.npp.entities.request.GetVerificationDetailsByPhn;
import com.project.npp.entities.request.UpdateVerificationDetails;
import com.project.npp.exceptionmessages.QueryMapper;
import com.project.npp.exceptions.LogNotFoundException;
import com.project.npp.exceptions.VerificationDetailsNotFoundException;
import com.project.npp.utilities.AirtelVerificationDetailsService;

@RestController
@RequestMapping("/api/airtelcomplianceofficer")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AirtelComplianceOfficerController {

	private static Logger loggers = LogManager.getLogger(AirtelComplianceOfficerController.class);

	@Autowired
	private AirtelVerificationDetailsService verificationDetailsService;

	// API end point to add verification details
	@GetMapping("/addverificationdetails")
	public ResponseEntity<String> addVerificationDetails() throws FileNotFoundException, IOException {
		String message = verificationDetailsService.fetchVerificationDetails();
		loggers.info(QueryMapper.VERIFICATION_DETAILS);
		return new ResponseEntity<>(message, HttpStatus.OK);
	}

	// API end point to updated verification details
	@PostMapping("/updateverificationdetails")
	public ResponseEntity<AirtelVerificationDetails> updateVerificationDetails(
			@RequestBody UpdateVerificationDetails details) throws VerificationDetailsNotFoundException {
		AirtelVerificationDetails vDetails = new AirtelVerificationDetails();
		vDetails.setContractualObligationsMet(details.getContractualObligationsMet());
		vDetails.setCustomerIdentityVerified(details.getCustomerIdentityVerified());
		vDetails.setNoOutstandingPayments(details.getNoOutstandingPayments());
		vDetails.setNotificationToCurrentOperator(details.getNotificationToCurrentOperator());
		vDetails.setNumberStatus(details.getNumberStatus());
		vDetails.setPhoneNumber(details.getPhoneNumber());
		vDetails.setTimeSinceLastPort(details.getTimeSinceLastPort());
		AirtelVerificationDetails updatedDetails = verificationDetailsService.updateVerificationDetails(vDetails);
		loggers.info(QueryMapper.UPDATE_VERIFICATION_DETAILS);
		return new ResponseEntity<>(updatedDetails, HttpStatus.OK);
	}

	// API end point to get all verification details
	@GetMapping("/getallverificationdetails")
	public ResponseEntity<List<AirtelVerificationDetails>> getAllVerificationDetails()
			throws VerificationDetailsNotFoundException {
		List<AirtelVerificationDetails> details = verificationDetailsService.getAll();
		loggers.info(QueryMapper.GET_VERIFICATION_DETAILS);
		return new ResponseEntity<>(details, HttpStatus.OK);
	}

	// API end point to get all verification details by phone number
	@PostMapping("/getverificationdetailsbyphn")
	public ResponseEntity<AirtelVerificationDetails> getVerificationDetailsByPhn(
			@RequestBody GetVerificationDetailsByPhn details)
			throws VerificationDetailsNotFoundException, LogNotFoundException {
		AirtelVerificationDetails vDetails = verificationDetailsService.getByPhoneNumber(details.getPhoneNumber());
		loggers.info(QueryMapper.GET_VERIFICATION_DETAILS);
		return new ResponseEntity<>(vDetails, HttpStatus.OK);
	}

}