import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Utility/ContactSlice';
import NoContacts from './NoContacts';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((store) => store.contacts.contacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  // Render either "NoContacts" component or the contact list
  return contacts.length === 0 ? (
    <NoContacts />
  ) : (
    <div className="mx-auto max-w-2xl p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">Contact List Page</h2>
      <div className="text-center mb-4">
        <Link
          to="/ContactForm"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Contact
        </Link>
      </div>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="border-b border-gray-300 py-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              {/* Contact Status Indicator */}
              <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                {contact.isActive === true ? (
                  <span className="text-green-500 text-xl">🟢</span>
                ) : (
                  <span className="text-red-500 text-xl">🔴</span>
                )}
              </div>
              <div className="ml-4">
                {/* Contact Name */}
                <h3 className="text-lg font-semibold">
                  {contact.firstName} {contact.lastName}
                </h3>
              </div>
            </div>
            <div className="space-x-4">
              {/* Edit Contact Button */}
              <Link to={`/ContactEdit/${contact.id}`}>
                <button>Edit</button>
              </Link>
              {/* Delete Contact Button */}
              <button
                onClick={() => handleDelete(contact.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
