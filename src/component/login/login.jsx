import { BrowserRouter as Link, } from 'react-router-dom';


function LoginForm() {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-100 bg-gradient-to-bl from-purple-300 via-transparent to-pink-300">
            <div className="w-full max-w-md">
                <div className="bg-white p-8 rounded shadow-md">
                    <form className="space-y-4">
                        <h2 className="text-2xl font-bold text-center">Login</h2>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" >Password</label>
                            <input type="password" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your password" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Log in</button>
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
        </div>
    );
}

export default LoginForm;
