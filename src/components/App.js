import React, { useState, useEffect } from 'react';
import './App.css';
import { nanoid } from 'nanoid'
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import EditContact from './EditContact';

function App() {
  const LOCALE_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [editcontact, setEditContacts] = useState();


  const addContactHandler = (contact) =>{
    console.log(nanoid())
    setContacts([...contacts, {id:nanoid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };


  const editContactHandler = (id) => {
    console.log("edit triggered")
    const findContact = contacts.find((contact) => contact.id === id);
    setEditContacts(findContact)
    console.log(findContact, "edit")
  };



  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY));
    if (retriveContacts && retriveContacts.length >= 1) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <div className='ui container'>
      <Header />
      {
        !editcontact ?  <AddContact addContactHandler={addContactHandler}/> : <EditContact editContact={editcontact} />
      }

      <ContactList contacts={contacts} editContactHandler={editContactHandler} getContactId={removeContactHandler}/>
      </div>
    </div>
  );
}

export default App;
