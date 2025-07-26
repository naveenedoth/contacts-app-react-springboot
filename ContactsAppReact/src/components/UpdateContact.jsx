import { useState } from "react"
import API from "./API"

const UpdateContact = ({contact}) => {

    const [modal, setModal] = useState(false)
    const openModal = () => { setModal(true) }    
    const closeModal = () => { setModal(false) }
    
    const [updatedContact, setUpdatedContact] = useState({...contact})

    const handleChange = (e) => {
        setUpdatedContact({...updatedContact, [e.target.name]: e.target.value })
    };

    const restoreModal = () => {
        setUpdatedContact({
        firstName:contact.firstName,
        lastName:contact.lastName,
        phoneNumber:contact.phoneNumber,
        email:contact.email
    })}

    const submitContact = async (e) => {
        e.preventDefault()
        try {
            await API.put(`contact/${contact.id}`, updatedContact);
            window.location.reload();
            console.log("Contact updated successfully!");
        } catch (error) {
            console.error("ERROR: Failed to update contact!", error);
            alert("Failed to update contact!!!");
        }
    }

    return(
        <div>
            <button onClick={openModal} className="cursor-pointer hover:underline">Edit</button>
            {
                modal && (
                    <div>
                        <div>
                            <h1 className="font-bold">Update Contact</h1>
                            <button onClick={closeModal} className="cursor-pointer border border-gray-900">Cancel</button>
                        </div>
                        <form>
                            <label>First Name:</label>
                            <input type="text" name="firstName" value={updatedContact.firstName} onChange={handleChange} required className="border border-gray-300"/>
                            <label>Last Name:</label>
                            <input type="text" name="lastName" value={updatedContact.lastName} onChange={handleChange} required className="border border-gray-300"/>
                            <label>Phone Number:</label>
                            <input type="text" name="phoneNumber" value={updatedContact.phoneNumber} maxLength={10} onChange={handleChange} required className="border border-gray-300"/>
                            <label>Email:</label>
                            <input type="email" name="email" value={updatedContact.email} onChange={handleChange} required className="border border-gray-300"/>
                        </form>
                        <div>
                            <button type="reset" onClick={restoreModal} className="cursor-pointer border border-gray-900">Restore</button>
                            <button type="submit" onClick={submitContact} className="cursor-pointer border border-gray-900">Submit</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default UpdateContact