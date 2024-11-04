import React from 'react';

export default function FirstPage() {
    return (
        <div className='min-h-screen bg-gray-100'>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                {/* Logo */}
                <img
                    src="/path-to-logo/logo.png"
                    alt="Logo"
                    className="w-32 mb-8" // Adjust width as needed
                />

                {/* Greeting Text */}
                <h1 className="text-2xl font-medium text-gray-700 mb-8 text-center">
                    Hey, would you like to sign in as...
                </h1>

                {/* Buttons */}
                <div className="flex flex-col space-y-4 w-64">
                    <button className="py-3 text-white bg-blue-600 rounded-lg shadow-md font-semibold hover:bg-blue-700">
                        ADMIN
                    </button>
                    <button className="py-3 text-white bg-blue-600 rounded-lg shadow-md font-semibold hover:bg-blue-700">
                        Student
                    </button>
                </div>
            </div>
        </div>
    );
}
