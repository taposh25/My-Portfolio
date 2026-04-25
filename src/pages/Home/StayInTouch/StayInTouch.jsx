
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const StayInTouch = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // EmailJS দিয়ে ইমেইল পাঠানো
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,   
      import.meta.env.VITE_TEMPLATE_ID,  
      form.current,
      import.meta.env.VITE_PUBLIC_KEY    
    )
    .then((result) => {
        console.log("Success:", result.text);
        setStatus("Thank you! You have successfully subscribed.");
        setLoading(false);
        e.target.reset(); 
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

      <form ref={form} onSubmit={sendEmail} className="flex flex-col md:flex-row justify-center items-center gap-4 px-4">
        <input 
          type="email" 
          name="user_email" 
          placeholder="Enter your email address"
          required
          className="w-full md:w-96 px-4 py-3 border border-red-200 bg-[#eff6ff] rounded-md focus:outline-none focus:border-[#f26457]"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-[#f26457] text-white px-10 py-3 rounded-md font-semibold hover:bg-[#d95349] transition-all disabled:bg-gray-400"
        >
          {loading ? "Sending..." : "Subscribe"}
        </button>
      </form>

     
      {status && (
        <p className={`mt-4 font-medium ${status.includes("Thank you") ? "text-green-600" : "text-red-500"}`}>
          {status}
        </p>
      )}
    </section>
  );
};

export default StayInTouch;