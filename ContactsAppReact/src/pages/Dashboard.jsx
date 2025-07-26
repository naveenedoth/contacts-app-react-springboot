import ContactsTable from "../components/ContactsTable"
import AddContact from "../components/AddContact"

export default function Dashboard(){
    return(
        <div>
            <div>
                <h1 className="font-bold text-2xl">CONTACTS TABLE</h1><br/>
            </div>
            <div>
                <AddContact /><br/>
            </div>
            <div>
                <ContactsTable />
            </div>
        </div>
    )
}