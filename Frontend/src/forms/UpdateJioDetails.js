import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JioCOService from '../services/JioCOService';
 
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
      <h2>UPDATE DETAILS</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Customer Identity Verified :</label>
          <select className="form-control" name="customerIdentityVerified" value={detailsData.customerIdentityVerified} onChange={handleInputChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>No Outstanding Payments :</label>
          <select className="form-control" name="noOutstandingPayments" value={detailsData.noOutstandingPayments} onChange={handleInputChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Time Since Last Port :</label>
          <input type="number" className="form-control" name="timeSinceLastPort" value={detailsData.timeSinceLastPort} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Contractual Obligations Met :</label>
          <input type="text" className="form-control" name="contractualObligationsMet" value={detailsData.contractualObligationsMet} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Number Status :</label>
          <input type="text" className="form-control" name="numberStatus" value={detailsData.numberStatus} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Notification To Operator :</label>
          <select className="form-control" name="notificationToCurrentOperator" value={detailsData.notificationToCurrentOperator} onChange={handleInputChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">UPDATE</button>
        <div className="card-footer text-center mt-3">
          <button type="button" className="btn btn-secondary" onClick={() => navigate("/airteldetails")}>Back to Customer Management</button>
        </div>
      </form>
    </div>
  );
};

 
export default UpdateJioDetails;