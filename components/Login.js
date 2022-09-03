import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth-context';

export default function Login() {
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    const { login } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        console.log({
            username: e.target.username.value,
            password
        });
        login({
            username,
            password,
        });
    }

    function handleUserName(e) {
        setUserName(e.target.value);
    }
    function handleUserPassword(e) {
        setPassword(e.target.value)
    }

    return (
        <main
            className="flex items-center justify-center w-full min-h-screen mx-auto text-white bg-green-800">
            <div className="flex justify-center mx-4 my-2 md:mx-0">
                <form className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap mb-6 -mx-3">
                        <div className="w-full px-3 mb-6 md:w-full">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor='Password'>Email address</label>
                            <input type="text"
                                onChange={handleUserName}
                                id="username" className="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none" required />
                        </div>
                        <div className="w-full px-3 mb-6 md:w-full">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor='Password'>Password</label>
                            <input onChange={handleUserPassword}
                                type="password"
                                id="password" className="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none" required />
                        </div>
                        <div className="w-full px-3 mb-6 md:w-full">
                            <button className="block w-full px-3 py-3 font-bold leading-tight text-gray-100 bg-green-800 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:bg-white focus:border-gray-500">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </main >
    )
}