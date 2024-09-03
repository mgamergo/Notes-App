import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";

function Signup() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  
  const submit = async (data) => { 
    await authService.logout()   
    const result = await authService.signUp(data)
    dispatch(login({userData: result.userId, sessionId: result.$id}))
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#030712]">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full max-w-md p-8 space-y-6 rounded-lg bg-[#111827] shadow-md"
      >
        <h2 className="text-2xl font-bold text-white text-center">Sign Up</h2>

        <div>
          <label className="block text-[#9198a4]">Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full p-2 mt-2 bg-[#111827] text-[#9198a4] border border-[#2d2f38] rounded-md focus:outline-none focus:text-white focus:ring-2 focus:ring-[#15803d]"
          />
        </div>

        <div>
          <label className="block text-[#9198a4]">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 mt-2 bg-[#111827] text-[#9198a4] border border-[#2d2f38] rounded-md focus:outline-none focus:text-white focus:ring-2 focus:ring-[#15803d]"
          />
        </div>

        <div>
          <label className="block text-[#9198a4]">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full p-2 mt-2 bg-[#111827] text-[#9198a4] border border-[#2d2f38] rounded-md focus:outline-none focus:text-white focus:ring-2 focus:ring-[#15803d]"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 mt-4 bg-[#15803d] text-white rounded-md hover:bg-[#136f33] transition-colors duration-300"
        >
          Sign Up
        </button>
        <p className="text-center">Already have an account? <Link to='/login'><span className="text-blue-600 hover:underline">Log-In here</span></Link></p>
      </form>
    </div>
  );
}

export default Signup;
