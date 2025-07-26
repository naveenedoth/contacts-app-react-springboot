import { useNavigate } from 'react-router-dom';

export default function Register(){
    const navigate = useNavigate();
    
    const handleRegister = () => {
        navigate('/login');
    };

    return(
        <div>
            <div>
                <h1 className='font-bold'>Register page</h1>
            </div>
            <div>
                <button className="cursor-pointer border border-gray-900" onClick={handleRegister}>Submit</button>
            </div>
        </div>
    )
}