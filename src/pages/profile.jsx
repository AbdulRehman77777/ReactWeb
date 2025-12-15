import React from 'react';
import { User } from 'lucide-react';

const Profile = () => (
  <div className="card">
    <h3>React App</h3>
    <h2>Profile</h2>
    <div className="center-content">
      <div className="circle-bg"><User size={40} color="white"/></div>
      <div className="line long"></div>
      <div className="line short"></div>
    </div>
  </div>
);
export default Profile;