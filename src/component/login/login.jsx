import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();
            console.log('Response data:', data);

            if (response.ok) {
                toast.success('Login successful!', {
                    position: toast.POSITION.TOP_RIGHT,
                });

                setTimeout(() => {
                    navigate('/landing');
                }, 1000); // Short delay for the toast to be shown
            } else {
                toast.error(data.message || 'Login failed, please try again.', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error('An error occurred during login. Please try again.', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100 bg-gradient-to-b from-purple-100 to-white">
            <div className="w-full max-w-md">
                <div className="bg-white p-8 rounded shadow-md">
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <h2 className="text-2xl font-bold text-center">Login</h2>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Password</label>
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                            Log in
                        </button>
                        <div className="mt-4 text-center">
                            <p>
                                Don&apos;t have an account?{' '}
                                <Link to="/signup" className="text-blue-500 hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Toast container to display toasts */}
            <ToastContainer />
        </div>
    );
}

export default LoginForm;
