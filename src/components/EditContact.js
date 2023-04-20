import React, { useState } from 'react';




const EditContact = ({editContact}) => {
  const LOCALE_STORAGE_KEY = "contacts";

    const [edit, setEdit] = useState({
        name:editContact.name,
        email:editContact.email,
        phone:editContact.phone,
        id:editContact.id,
    });
    const updateContact = () => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY));
        const editingIndex = retriveContacts.findIndex((contact) => contact.id === editContact.id);
        // update the contact object at the editingIndex
        retriveContacts[editingIndex] = edit;
        localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(retriveContacts));
        window.location.reload()
      };


      
    return (
        <div className='ui main'>
        <h2>Update Contact</h2>
        <div className='ui form'>
            <div className='field'>
                <label>Name</label>
                <input 
                type='text'
                name='name' 
                placeholder='Name'
                value={edit.name}
                onChange={ (e) => setEdit({...edit, name: e.target.value})}/>
            </div>
            <div className='field'>
                <label>Email</label>
                <input type='text' name='email' placeholder='Email' value={edit.email}
                onChange={ (e) => setEdit({...edit, email: e.target.value})}/>
            </div>
            <div className='field'>
                <label>Phone Number</label>
                <input type='text' name='phone' placeholder='Phone' value={edit.phone}
                onChange={ (e) => setEdit({...edit, phone: e.target.value})}/>
            </div>
            <button className='ui button green' onClick={updateContact}>Update</button>
        </div>
    </div>
    )
};

export default EditContact;