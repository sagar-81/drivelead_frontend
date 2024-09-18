import React from 'react';

function OTPModal({ isOpen, otp, setOtp, onSubmitOTP }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h3 className="text-lg font-bold mb-4">Enter OTP</h3>
                <form onSubmit={onSubmitOTP}>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={4}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter 4-digit OTP"
                        required
                    />
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OTPModal;
