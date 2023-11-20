import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout>
      <p className="text-center text-xs mt-10 mb-8">
        Gallery Elle (Zurich, St Moritz){" "}
        <span>
          <a
            href="mailto:atossa@galleryelle.com"
            className="hover:text-blue-400"
          >
            atossa@galleryelle.com
          </a>
        </span>
      </p>
      <form onSubmit={sendEmail} className=" px-4">
        <div className="max-w-lg flex flex-col justify-center items-center mx-auto space-y-4">
          <div className="w-full">
            <label className="mr-auto">Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full border-2 text-gray-900 mt-2 px-3 py-2 rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full">
            <label className="mr-auto">Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full border-2 text-gray-900 mt-2 px-3 py-2 rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full">
            <label className="mr-auto">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border-2 text-gray-900 mt-2 px-3 py-2 rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full">
            <label className="mr-auto">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 text-gray-900 mt-2 px-3 py-2 rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="mx-auto mt- bg-emerald-400 text-white rounded-md py-2 px-3 w-full"
          />
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
