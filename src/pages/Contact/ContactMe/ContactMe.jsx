// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { FiPhone, FiMapPin, FiMail, FiSend } from 'react-icons/fi';

// const ContactMe = () => {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs.sendForm(
//       import.meta.env.VITE_SERVICE_ID, 
//       import.meta.env.VITE_TEMPLATE_ID, 
//       form.current, 
//       import.meta.env.VITE_PUBLIC_KEY
//     )
//     .then(() => {
//       setStatus("success");
//       setLoading(false);
//       e.target.reset();
//     }, (error) => {
//       console.log(error.text);
//       setStatus("error");
//       setLoading(false);
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <FiPhone size={24} />,
//       title: "+880 1792524289",
//       desc: "Thursday - Friday ",
//     },
//     {
//       icon: <FiMapPin size={24} />,
//       title: "Dhaka, Bangladesh",
//       desc: "Mirpur, Dhaka 1216",
//     },
//     {
//       icon: <FiMail size={24} />,
//       title: "taposhbarai03@gmail.com",
//       desc: "Contact me every time!",
//     },
//   ];

//   return (
//     <section className="py-20 px-6 md:px-20 bg-[#f9fbff]">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Top Info Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {contactInfo.map((info, index) => (
//             <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
//               <div className="text-[#f26457] bg-red-50 p-4 rounded-full mb-4">
//                 {info.icon}
//               </div>
//               <h3 className="text-[#0a1d37] font-bold text-lg mb-2">{info.title}</h3>
//               <p className="text-gray-500 text-sm">{info.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Contact Form Section */}
//         <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
//           <h2 className="text-3xl font-bold text-[#0a1d37] mb-2">Get In Touch</h2>
//           <div className="w-12 h-1 bg-[#f26457] mb-8"></div>

//           <form ref={form} onSubmit={sendEmail} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
//               <input
//                 type="text"
//                 name="from_name" 
//                 placeholder="Enter your name *"
//                 required
//                 className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#f26457] transition-all"
//               />
//               <input
//                 type="email"
//                 name="user_email" 
//                 placeholder="Enter email address *"
//                 required
//                 className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#f26457] transition-all"
//               />
//             </div>
            
//             <textarea
//               name="message" // Template-এ {{message}} থাকলে এটি দিন
//               placeholder="Enter your message"
//               rows="5"
//               className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#f26457] transition-all"
//             ></textarea>

//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#f26457] text-white px-10 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-[#d95349] transition-all shadow-lg shadow-red-200 disabled:bg-gray-400"
//             >
//               {loading ? "Sending..." : "Send Message"}
//               <FiSend />
//             </button>

//             {status === "success" && (
//               <p className="text-green-600 font-medium">Message sent successfully! I will contact you soon.</p>
//             )}
//             {status === "error" && (
//               <p className="text-red-500 font-medium">Something went wrong. Please try again.</p>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactMe;


import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // ১. ইমপোর্ট করুন
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // ২. রিঅ্যাক্ট হুক ফর্মের ফাংশনগুলো ডিক্লেয়ার করুন
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    setStatus("");

    // ৩. EmailJS দিয়ে ডাটা পাঠানো (data অবজেক্ট সরাসরি পাঠানো যায়)
    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      data, // এখানে data হচ্ছে { from_name, user_email, message }
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

      {/* ৪. handleSubmit ব্যবহার করুন */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Name Input */}
        <div>
          <input
            type="text"
            placeholder="Enter your name "
            {...register("from_name", { required: "Name is required" })} // ভ্যালিডেশনসহ রেজিস্টার
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