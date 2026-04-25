
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; 
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

 
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
    .then(() => {
      setStatus("success");
      setLoading(false);
      reset(); // ফর্ম ক্লিয়ার করা
    })
    .catch((error) => {
      console.log(error);
      setStatus("error");
      setLoading(false);
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
      <h2 className="text-3xl font-bold text-[#0a1d37] mb-2">Get In Touch</h2>
      <div className="w-12 h-1 bg-[#f26457] mb-8"></div>

      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Name Input */}
        <div>
          <input
            type="text"
            placeholder="Enter your name "
            {...register("from_name", { required: "Name is required" })} 
            className={`w-full px-5 py-4 bg-gray-50 border ${errors.from_name ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-[#f26457] text-gray-800 placeholder-gray-400`}
          />
          {errors.from_name && <span className="text-red-500 text-xs mt-1">{errors.from_name.message}</span>}
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            placeholder="Enter email address "
            {...register("user_email", { 
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
            })}
            className={`w-full px-5 py-4 bg-gray-50 border ${errors.user_email ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-[#f26457] text-gray-800 placeholder-gray-400`}
          />
          {errors.user_email && <span className="text-red-500 text-xs mt-1">{errors.user_email.message}</span>}
        </div>

        {/* Message Input */}
        <div>
          <textarea
            placeholder="Enter your message"
            rows="5"
            {...register("message", { required: "Message cannot be empty" })}
            className={`w-full px-5 py-4 bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-[#f26457] text-gray-800 placeholder-gray-400`}
          ></textarea>
          {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#f26457] text-white px-10 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-[#d95349] transition-all shadow-lg shadow-red-200 disabled:bg-gray-400"
        >
          {loading ? "Sending..." : "Send Message"}
          <FiSend />
        </button>

        {status === "success" && <p className="text-green-600 font-medium mt-4">Message sent successfully!</p>}
        {status === "error" && <p className="text-red-500 font-medium mt-4">Something went wrong!</p>}
      </form>
    </div>
  );
};

export default Contact;