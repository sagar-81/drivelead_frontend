
import { Link } from 'react-router-dom';
//import { useState } from 'react';
// src/component/signup/signup.jsx
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { signUp } from '../../redux/authSlice.jsx';



function SignUpForm() {
    //  const [showPassword, setShowPassword] = useState(false);

    // Function to toggle the password visibility
    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        dispatch(signUp({ email, password, confirmPassword }));
    };
    return (
        <div className='w-full'>
            <div className="h-screen flex justify-center items-center bg-gray-100 bg-gradient-to-b from-purple-100 to-white w-full">
                <div className="w-full max-w-md">
                    <div className="bg-white p-8 rounded shadow-md">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                            {error && <p className="text-red-500">{error}</p>}
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your email" required value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Password</label>
                                <input type="password" className="w-full p-2 border border-gray-300 rounded" placeholder="Create a password" required value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                                <input type="password" className="w-full p-2 border border-gray-300 rounded" placeholder="Confirm password" required value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" disabled={loading}> {loading ? 'Signing Up...' : 'Sign Up'}</button>
                            <div className="relative flex justify-center items-center my-4">
                                <hr className="w-full border-gray-300" />
                                <span className="absolute bg-white px-4 text-gray-500">or</span>
                            </div>
                            <div className="mt-6 space-y-2">
                                <button type="button" className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 flex justify-center items-center">
                                    <i className="fab fa-google mr-2"></i> Sign Up with Google
                                </button>
                                <button type="button" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 flex justify-center items-center">
                                    <i className="fab fa-apple mr-2"></i> Sign Up with Apple
                                </button>
                                <button type="button" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex justify-center items-center">
                                    <i className="fab fa-facebook mr-2"></i> Sign Up with Facebook
                                </button>
                            </div>
                            <div className="mt-4 text-center">
                                <p>
                                    Already have an account?{' '}
                                    <Link to="/login" className="text-blue-500 hover:underline">
                                        Log in
                                    </Link>
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
