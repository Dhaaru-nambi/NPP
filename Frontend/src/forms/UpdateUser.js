import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SystemAdminService from '../services/SystemAdminService';
import './UpdateUser.css';

function UpdateUser() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [userData, setUserData] = useState({
    username: '',
    role: ''
  });
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  useEffect(() => {
    if (userId) {
      fetchUserDataById(userId);
    }
  }, [userId]);

  const fetchUserDataById = async (userId) => {
    try {
      const response = await SystemAdminService.viewUsers();
      const user = response.find((user) => user.userId.toString() === userId);
      if (user) {
        setUserData({
          username: user.username,
          role: user.role.name // Assuming the role is an object with a name property
        });
      } else {
        setError('User not found');
      }
    } catch (error) {
      setError('Error fetching user data');
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SystemAdminService.updateUserRole(userData);
      navigate("/usermanagement");
    } catch (error) {
      console.error('Error updating user:', error);
      alert(error.message || 'An error occurred while updating user.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="auth-container mt-5 pt-5">
      <h2>UPDATE ROLE</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username :</label>
          <input
            type="text"
            name="username"
            value={userData.username || ''}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Role :</label>
          <select
            name="role"
            value={userData.role}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Role</option>
            <option value="ROLE_SYSTEM_ADMIN">ROLE_SYSTEM_ADMIN</option>
            <option value="ROLE_CUSTOMER_SERVICE">ROLE_CUSTOMER_SERVICE</option>
            <option value="ROLE_COMPLIANCE_OFFICER">ROLE_COMPLIANCE_OFFICER</option>
            <option value="ROLE_JIO_COMPLIANCE_OFFICER">ROLE_JIO_COMPLIANCE_OFFICER</option>
            <option value="ROLE_AIRTEL_COMPLIANCE_OFFICER">ROLE_AIRTEL_COMPLIANCE_OFFICER</option>
            <option value="ROLE_USER">ROLE_USER</option>
            <option value="ROLE_DEFAULT">ROLE_DEFAULT</option>
          </select>
        </div>
        <button type="submit" className="btn btn-default w-100">UPDATE</button>
        <div className="card-footer text-center">
          <button className="btn btn-default" onClick={() => navigate("/usermanagement")}>Back to User Management</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
