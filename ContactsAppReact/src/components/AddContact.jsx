import { useState } from "react"
import API from "./API"

const AddContact = () => {

    const [modal, setModal] = useState(false)
    const openModal = () => { setModal(true) }    
    const closeModal = () => { setModal(false) }

    const [contact, setContact] = useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:""
    })

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const resetModal = () => {
        setContact({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:""
    })}

    const submitContact = async (e) => {
        e.preventDefault()
        try {
            await API.post(`add-contact`, contact);
            window.location.reload();
            console.log("Contact added successfully!");
        } catch (error) {
            console.error("ERROR: Failed to add contact!", error);
            alert("Failed to add contact!!!");
        }
    }

    return(
        <div>
            <button onClick={openModal} className="cursor-pointer hover:underline">Add Contact</button>
            {modal && (<div>
                <div>
                    <h1 className="font-bold">Add Contact</h1>
                    <button onClick={closeModal} className="cursor-pointer border border-gray-900">Cancel</button>
                </div>
                <form>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={contact.firstName} placeholder="First Name" onChange={handleChange} required className="border border-gray-300"/>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={contact.lastName} placeholder="Last Name" onChange={handleChange} required className="border border-gray-300"/>
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" value={contact.phoneNumber} maxLength={10} placeholder="Phone Number" onChange={handleChange} required className="border border-gray-300"/>
                    <label>Email:</label>
                    <input type="email" name="email" value={contact.email} placeholder="Email" onChange={handleChange} required className="border border-gray-300"/>
                </form>
                <div>
                    <button type="reset" onClick={resetModal} className="cursor-pointer border border-gray-900">Reset</button>
                    <button type="submit" onClick={submitContact} className="cursor-pointer border border-gray-900">Submit</button>
                </div>
                </div>)}
        </div>
    )
}

export default AddContact