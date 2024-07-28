import React from "react";
import AuthService from "../services/auth.service";
import UserProfileIcon from "../forms/UserProfileIcon";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow" style={{ backgroundColor: '#f7f7f7', border: 'none', borderRadius: '10px' }}>
            <div className="card-body">
              <div className="text-center mb-4">
                <UserProfileIcon size={80} color="#6b3d7d" /> {/* Add the icon here */}
              </div>
              <h3 className="card-title mb-4 text-center" style={{ backgroundColor: '#6b3d7d', color: 'white', padding: '15px', borderRadius: '10px', fontFamily: 'Cambria, Cochin, Georgia, Times, \'Times New Roman\'' }}>USER PROFILE</h3>

              <div className="mb-3" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, \'Times New Roman\'', color: '#6b3d7d' }}>
                <strong>Username: </strong> {currentUser.username}
              </div>
              <div className="mb-3" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, \'Times New Roman\'', color: '#6b3d7d' }}>
                <strong>ID: </strong> {currentUser.id}
              </div>
              <div className="mb-3" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, \'Times New Roman\'', color: '#6b3d7d' }}>
                <strong>Authorities: </strong> {currentUser.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;