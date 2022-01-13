import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';


function ContactDisplay(props) {
    const [users, setUsers] = useState([]);
    const [filteredName, setFilteredName] = useState('')
    const userCollectionRef = collection(db, 'users')
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers()
    });
    let filteredUsers = users.filter(user => user.name === filteredName);

    if (filteredUsers.length === 0) {
        filteredUsers = users
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, 'users', id);
        await deleteDoc(userDoc);
    }
    return (
        <div>
            <div>
                <input type="text" value={filteredName} onChange={(e) => setFilteredName(e.target.value)} placeholder="Search By Name" />            </div>
            {filteredUsers.length>0 && filteredUsers.map((user => (
                <div>
                    <h2>Name: {user.name}</h2>
                    <h3>Contact: {user.contact}</h3>
                    <h3>Address: {user.address}</h3>
                    <button onClick={() => { deleteUser(user.id) }} >Delete</button>
                </div>
            )))}
            {filteredUsers.length === 0 && <h2>No users found</h2>}
        </div>
    );
};

export default ContactDisplay