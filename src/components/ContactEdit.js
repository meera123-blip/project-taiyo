import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editContact } from '../Utility/ContactSlice';
import { Link } from 'react-router-dom';

const EditContact = () => {
  // Get the 'id' parameter from the URL using useParams()
  const dispatch = useDispatch();
  const { id } = useParams();
const parsedId = parseFloat(id); // Parse the id as a floating-point number
const contact = useSelector((store) =>
  store.contacts.contacts.find((c) => c.id === parsedId)
);
  // Initialize 'editedContact' state with the retrieved contact data
  const [editedContact, setEditedContact] = useState(contact);

  // Handle input changes and update 'editedContact' accordingly
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedContact((prevContact) => ({
      ...prevContact,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle the save button click event
  const handleSave = () => {
    if (editedContact) {
      // Dispatch the 'editContact' action with the updated contact data
      dispatch(editContact(editedContact));
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <Link
    to="/ContactList"
    className="text-blue-500 hover:underline mb-4 inline-block"
  >
    List of Contacts
  </Link>
  <h2 className="text-3xl font-semibold mb-4">Edit Contact</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={editedContact?.firstName || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={editedContact?.lastName || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="active" className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="active"
              id="active"
              checked={editedContact?.active || false}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-600 rounded-full"
            />
            <span className="ml-2 text-gray-700 text-sm font-bold">Active</span>
          </label>
        </div>
      </form>
      <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
      >
        Save
      </button>
    </div>
  );
};

export default EditContact;
