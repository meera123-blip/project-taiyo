import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addContact } from '../Utility/ContactSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  // Initialize form data state with default values
  const [formData, setFormData] = useState({
    id: parseInt(nanoid(), 36), // Generate a unique ID using nanoid
    firstName: '',
    lastName: '',
    isActive: false,
  });

  // Initialize a state to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle input changes and update form data state
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the first name and last name are not empty
  if (!formData.firstName || !formData.lastName) {
    // Display an error message or take other appropriate action
    alert('Please fill in both first name and last name fields.');
    return; // Prevent further execution of the function
  }

  // Validate the first and last name format (for example, only alphabetic characters)
  const nameRegex = /^[A-Za-z\s]+$/; // Regular expression for alphabetic characters and spaces
  if (!nameRegex.test(formData.firstName) || !nameRegex.test(formData.lastName)) {
    // Display an error message or take other appropriate action
    alert('Invalid name format. Names can only contain alphabetic characters and spaces.');
    return; // Prevent further execution of the function
  }
    dispatch(addContact(formData)); // Dispatch the addContact action with the form data

    // Reset form data to default values after submission
    setFormData({
      id: parseInt(nanoid(), 36), // Generate a new unique ID
      firstName: '',
      lastName: '',
      isActive: false,
    });

    // Set the formSubmitted state to true to display the submission message
    setFormSubmitted(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <Link to="/ContactList" className="text-blue-500 hover:underline mb-4 block">
          List of Contacts
        </Link>
        <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              className="border border-gray-300 px-3 py-2 rounded-lg w-full"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              className="border border-gray-300 px-3 py-2 rounded-lg w-full"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                id="isActive"
                className="form-checkbox mr-2"
                name="isActive"
                checked={formData.isActive}
                onChange={handleInputChange}
              />
              <span className="text-gray-700">Active</span>
            </label>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
        {formSubmitted && (
          <p className="text-green-500 font-semibold">Form submitted successfully!</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
