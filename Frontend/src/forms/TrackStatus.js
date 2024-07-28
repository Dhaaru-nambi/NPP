import React, { useState, useEffect } from "react";
import Customer from "../services/Customer";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "../services/auth.service";
import "./TrackStatus.css"; // Import your custom CSS file

const TrackStatus = () => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMyStatus(); // Fetch status on component mount
  }, []);

  const getMyStatus = async () => {
    try {
      const username = AuthService.getCurrentUser().username;
      const statusData = await Customer.getStatus(username);
      setStatus(statusData);
      setError(null);
    } catch (error) {
      console.error("Error fetching Status", error);
      setStatus(null);
      setError("Error fetching status. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {status && (
            <div className="card shadow status-card" style={{ backgroundColor: '#f7f7f7', border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <h3 className="card-title mb-4 text-center profile-title" style={{ backgroundColor: '#6b3d7d', color: 'white', padding: '15px', borderRadius: '10px', fontFamily: 'Cambria, Cochin, Georgia, Times, \'Times New Roman\'' }}>STATUS DETAILS</h3>

                <div className="mb-3 profile-info" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, \'Times New Roman\'', color: '#6b3d7d' }}>
                  <strong>Status:</strong> {status.status}
                </div>
                <div className="mb-3 profile-info" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, \'Times New Roman\'', color: '#6b3d7d' }}>
                  <strong>Last Updated:</strong> {status.lastUpdated}
                </div>
                <div className="mb-3 profile-info" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, \'Times New Roman\'', color: '#6b3d7d' }}>
                  <strong>Notes:</strong> {status.notes}
                </div>
              </div>
            </div>
          )}
          {error && (
            <div className="alert alert-danger mt-4 text-center">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackStatus;
