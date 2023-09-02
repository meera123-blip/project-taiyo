import React from 'react'
import {Link} from 'react-router-dom'

const NoContacts = () => {
  return (
    <div class="bg-gray-100 min-h-screen flex justify-center items-center">
    <div class="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <div class="mb-4">
           <Link to="/ContactForm"> <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
                Add Contacts
            </button></Link>
        </div>
        <div>
            <p class="text-gray-600">
                There are no contacts at this moment. Click the button to add Contacts!!
            </p>
        </div>
    </div>
</div>

  )
}

export default NoContacts