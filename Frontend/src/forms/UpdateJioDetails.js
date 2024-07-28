import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JioCOService from '../services/JioCOService';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateJioDetails() {
  const navigate = useNavigate();
  const { phoneNumber } = useParams();

  const [detailsData, setDetailsData] = useState({
    phoneNumber: '',
    customerIdentityVerified: '',
    noOutstandingPayments: '',
    timeSinceLastPort: '',
    numberStatus: '',
    contractualObligationsMet: '',
    notificationToCurrentOperator: ''
  });

  useEffect(() => {
    fetchDetailsByPhn(phoneNumber);
  }, [phoneNumber]);

  const fetchDetailsByPhn = async (phoneNumber) => {
    try {
      const response = await JioCOService.getVerificationDetailsByPhn(phoneNumber);
      if (response) {
        setDetailsData(response);
      } else {
        console.error('Error: Details data is undefined.');
      }
    } catch (error) {
      console.error('Error fetching details data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetailsData((prevDetailsData) => ({
      ...prevDetailsData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await JioCOService.updateVerificationDetails(detailsData);
      navigate("/jiodetails");
    } catch (error) {
      console.error('Error updating details:', error);
      alert(error.message || 'An error occurred while updating details.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">UPDATE DETAILS</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="form-group mb-3">
          <label>Customer Identity Verified :</label>
          <select className="form-control" name="customerIdentityVerified" value={detailsData.customerIdentityVerified} onChange={handleInputChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label>No Outstanding Payments :</label>
          <select className="form-control" name="noOutstandingPayments" value={detailsData.noOutstandingPayments} onChange={handleInputChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label>Time Since Last Port (months):</label>
          <input type="number" className="form-control" name="timeSinceLastPort" value={detailsData.timeSinceLastPort} onChange={handleInputChange} />
        </div>
        <div className="form-group mb-3">
          <label>Contractual Obligations Met :</label>
          <input type="text" className="form-control" name="contractualObligationsMet" value={detailsData.contractualObligationsMet} onChange={handleInputChange} />
        </div>
        <div className="form-group mb-3">
          <label>Number Status :</label>
          <select className="form-control" name="numberStatus" value={detailsData.numberStatus} onChange={handleInputChange}>
            <option value="ACTIVE">ACTIVE</option>
            <option value="SUSPENDED">SUSPENDED</option>
            <option value="DEACTIVATED">DEACTIVATED</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label>Notification To Operator :</label>
          <select className="form-control" name="notificationToCurrentOperator" value={detailsData.notificationToCurrentOperator} onChange={handleInputChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">UPDATE</button>
        <button type="button" className="btn btn-secondary w-100" onClick={() => navigate("/jiodetails")}>Back to Customer Management</button>
      </form>
    </div>
  );
};

export default UpdateJioDetails;
