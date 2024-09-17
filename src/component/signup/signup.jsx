
import { Link, useNavigate } from 'react-router-dom';
//import { useState } from 'react';


function SignUpForm() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Dashboard');
    };
    //  const [showPassword, setShowPassword] = useState(false);

    // Function to toggle the password visibility
    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };
    return (
        <div className='w-full'>
            <div className="h-screen flex justify-center items-center bg-gray-100 bg-gradient-to-b from-purple-100 to-white w-full">
                <div className="w-full max-w-md">
                    <div className="bg-white dark:bg-black p-8 rounded shadow-md">
                        <form className="space-y-4">
                            <h2 className="text-2xl font-bold text-center">Sign Up</h2>

                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your email" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Password</label>
                                <input type="password" className="w-full p-2 border border-gray-300 rounded" placeholder="Create a password" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                                <input type="password" className="w-full p-2 border border-gray-300 rounded" placeholder="Confirm password" required />
                            </div>
                            <button type="submit" onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Sign Up</button>
                            {/* <div className="relative flex justify-center items-center my-4">
                            <hr className="w-full border-gray-300" />
                            <span className="absolute bg-white dark:bg-black px-4 text-gray-500">or</span>
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
                        </div> */}
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
