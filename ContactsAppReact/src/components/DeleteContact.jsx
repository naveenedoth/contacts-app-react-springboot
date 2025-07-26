import { useState } from "react";
import API from "./API";

const DeleteContact = ({contact}) => {

    const [modal, setModal] = useState(false)
    const openModal = () => { setModal(true) }    
    const closeModal = () => { setModal(false) }

    const deleteContact = async (e) => {
        e.preventDefault()
        try {
            await API.delete(`contact/${contact.id}`, contact);
            window.location.reload();
            console.log("Contact deleted successfully!");
        } catch (error) {
            console.error("ERROR: Failed to delete contact!", error);
            alert("Failed to delete contact!!!");
        }
    }
    return(
        <div>
            <button onClick={openModal} className="cursor-pointer hover:underline">Delete</button>
            {
                modal && (
                    <div>
                        <div>
                            <h1 className="font-bold">Delete Contact</h1>
                        </div>
                        <p className="text-red-500">Are you sure you want to delete this contact?
                            This action can't be undone.
                        </p>
                        <div>
                            <button onClick={closeModal} className="cursor-pointer border border-gray-900">Cancel</button>
                            <button type="submit" onClick={deleteContact} className="cursor-pointer border border-gray-900">Delete</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default DeleteContact