import { useState } from 'react';
import './Form.css';
import { get } from '../../api/user';

const Form = ({ onSubmit }) => {
    /* State */
    const [username, setUsername] = useState('');
    const [notFound, setNotFound] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        const {success, data} = await get(username);

        if (success) {
            onSubmit(data);
            setUsername('');
            setNotFound(false);
        } else {
            setNotFound(true);
        }
    };

    const handleUserInput = e => {
        setUsername(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Github username" 
                value={username}
                onChange={handleUserInput}
                required 
            />
            <button>Add Card</button>
            {notFound ? <div className="error">User not found!</div> : ''}
        </form>
    )
}

export default Form;