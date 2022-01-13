import React , {useState} from 'react';
import {db} from '../firebase';
import { collection, addDoc } from 'firebase/firestore';


function ContactForm() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState();
    const [address , setAddress] = useState('');

    const userCollectionRef = collection(db, 'users');

    const createUser = async (e) => {
        e.preventDefault();
        await addDoc(userCollectionRef, { name: name, contact: contact, address: address});
        setName('');
        setContact('');
        setAddress('');
    }
    const nameChangeHandler = (event) => {
          setName(event.target.value);
    }
    const contactChangeHandler = (event) => {
          setContact(event.target.value);
    }
    const addressChangeHandler = (event) => {
        setAddress(event.target.value);
  }

    return (
        <div>
            <form onSubmit={createUser}>
                <input placeholder="Name..." value={name} type='text' onChange={nameChangeHandler} />
                <input placeholder="Address.." value={address} type='text' onChange={addressChangeHandler} />
                <input placeholder="Contact no..." value={contact} type='number' onChange={contactChangeHandler} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm