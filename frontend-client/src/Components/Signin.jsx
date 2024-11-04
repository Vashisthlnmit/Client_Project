import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { loginaccount } from "../Store/User/userreducer";
import  {useDispatch,useSelector} from "react-redux";
export default function Signin() {
    const [data, setdata] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const dispatch=useDispatch();
    async function LoginAccount(){
        const loginaccountresponse=await dispatch(loginaccount);
        console.log(loginaccountresponse(data));        
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="flex w-1/2 min-h-full flex-1 mx-auto justify-center px-6 py-12 lg:px-8 rounded-lg shadow-2xl">
                <div className="w-full">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-4xl font-bold tracking-tight text-gray-900">Let's Sign you in</h2>
                        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                            Student Login
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="space-y-6">
                            <div>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        required
                                        value={data.email}
                                        onChange={(e) => setdata({ ...data, email: e.target.value })}
                                        placeholder="Email, Phone, or Username"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        value={data.password}
                                        onChange={(e) => setdata({ ...data, password: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                <div className="text-sm mt-2 text-right">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    onClick={()=>(LoginAccount())}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Don't have an account?{' '}
                            <a href="#" className="font-semibold text-black hover:text-gray-700">
                                Register Now
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
