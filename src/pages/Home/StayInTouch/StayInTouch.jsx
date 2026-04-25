
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form'; 

const StayInTouch = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();


  const onSubmit = (data) => {
    setLoading(true);
    setStatus("");

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,   
      import.meta.env.VITE_TEMPLATE_ID,  
      data, 
      import.meta.env.VITE_PUBLIC_KEY    
    )
    .then((result) => {
        setStatus("Thank you! You have successfully subscribed.");
        setLoading(false);
        reset(); 
    }, (error) => {
        console.log("Error:", error.text);
        setStatus("Sorry, please try again.");
        setLoading(false);
    });
  };

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-[#0a1d37] mb-4">Stay In Touch</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10 px-4 text-sm md:text-base">
        Keep in touch with my latest project updates.
      </p>

     
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row justify-center items-center gap-4 px-4 max-w-xl mx-auto">
        <div className="w-full relative">
          <input 
            type="email" 
            placeholder="Enter your email address"
            {...register("user_email", { 
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email" }
            })}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none transition-all duration-300
              ${errors.user_email ? "border-red-500" : "border-red-200 focus:border-[#f26457]"} 
              bg-[#eff6ff] text-gray-800 placeholder-gray-500`} 
          />
         
          {errors.user_email && (
            <p className="text-red-500 text-xs text-left absolute -bottom-5 left-1">
              {errors.user_email.message}
            </p>
          )}
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="bg-[#f26457] text-white px-10 py-3 rounded-md font-semibold hover:bg-[#d95349] transition-all disabled:bg-gray-400 cursor-pointer whitespace-nowrap"
        >
          {loading ? "Sending..." : "Subscribe"}
        </button>
      </form>
      
    
      {status && (
        <p className={`mt-8 font-medium ${status.includes("Thank you") ? "text-green-600" : "text-red-500"}`}>
          {status}
        </p>
      )}
    </section>
  );
};

export default StayInTouch;