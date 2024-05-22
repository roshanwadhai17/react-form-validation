import React from 'react';
import { useLocation } from 'react-router-dom';

const SubmissionDetails = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h1>Submitted Details</h1>
      <p><strong>First Name:</strong> {state.firstName}</p>
      <p><strong>Last Name:</strong> {state.lastName}</p>
      <p><strong>Username:</strong> {state.username}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Phone Number:</strong> {state.phoneNo}</p>
      <p><strong>Country:</strong> {state.country}</p>
      <p><strong>City:</strong> {state.city}</p>
      <p><strong>PAN Number:</strong> {state.panNo}</p>
      <p><strong>Aadhar Number:</strong> {state.aadharNo}</p>
    </div>
  );
};

export default SubmissionDetails;
