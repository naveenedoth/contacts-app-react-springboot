import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate('/dashboard');
    };

    return(
        <div>
            <div>
                <h1 className='font-bold'>Login page</h1>
            </div>
            <div>
                <button className="cursor-pointer border border-gray-900" onClick={handleLogin}>Submit</button>
            </div>
        </div>
    )
}