import API from './API';
import React, { useEffect, useState } from "react";
import UpdateContact from './UpdateContact'
import DeleteContact from './DeleteContact';

const ContactsTable = () => {

    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        try {
            const response = await API.get(`http://localhost:8080/api/contacts`);
            setContacts(response.data);
            console.log("Contacts fetched successfully!");
        } catch (error) {
            console.error("Error fetching contacts!", error);
        }
    };

    useEffect(() => { fetchContacts(); }, []);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {contacts.map((contact, index) => (
                        <tr key={contact.id}>
                            <td>{index + 1}</td>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.email}</td>
                            <td>
                                <UpdateContact contact={contact}/>
                                <DeleteContact contact={contact}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ContactsTable