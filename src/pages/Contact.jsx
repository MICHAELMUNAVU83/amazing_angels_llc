import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.error("Email not sent ,Please fill in all fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      emailjs
        .sendForm(
          "service_m33cclr",
          "template_grjxnup",
          form.current,
          "uExk6rUQ-FXxJCyKf"
        )
        .then(
          (result) => {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            setTimeout(() => {
              toast.success("Email Sent , I will get back to you soon", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }, 1000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className="bg-gradient-to-t from-trabg-transparent">
      <ToastContainer />
      <section id="contact">
        <div className="container mx-auto p-4">
          <div className="text-center my-8">
            <h1 className="text-[#f0a202] mb-10">
              <b>Contact Us</b>
            </h1>
            <h3 className="text-[#00000087]">
              <b>We would Love to hear from you</b>
            </h3>
          </div>
          <div className="flex items-center justify-center my-20">
            <form onSubmit={sendEmail} ref={form}>
              <div className="flex flex-col md:flex-row lg:gap-32">
                <div className="p-4">
                  <label htmlFor="name">
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="NAME"
                      className="py-3 placeholder-[#00000080]  border-b-2 border-[#00000080] focus:outline-none w-full bg-transparent"
                    />
                  </label>
                </div>
                <div className="p-4">
                  <label htmlFor="email">
                    <input
                      type="email"
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="EMAIL"
                      className="py-3  placeholder-[#00000080] border-b-2 border-[#00000080] focus:outline-none w-full bg-transparent"
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-col md:flex-row lg:gap-32">
                <div className="p-4">
                  <label htmlFor="phone_number">
                    <input
                      type="text"
                      placeholder="PHONE NUMBER"
                      required
                      value={phone_number}
                      name="phone_number"
                      onChange={(e) => setPhone_number(e.target.value)}
                      className="py-3 placeholder-[#00000080] border-b-2 border-[#00000080] focus:outline-none w-full bg-transparent"
                    />
                  </label>
                </div>
                <div className="p-4">
                  <label htmlFor="subject">
                    <input
                      type="text"
                      value={subject}
                      name="subject"
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      placeholder="SUBJECT"
                      className="py-3 placeholder-[#00000080] border-b-2 border-[#00000080] focus:outline-none w-full bg-transparent"
                    />
                  </label>
                </div>
              </div>
              <div className="p-4">
                <label htmlFor="message">
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    cols="50"
                    rows="1"
                    required
                    placeholder="MESSAGE"
                    className="py-3 placeholder-[#00000080] border-b-2 border-[#00000080] focus:outline-none w-full bg-transparent"
                  ></textarea>
                </label>
              </div>
              <div className="p-4 text-center lg:mt-8">
                <button
                  type="submit"
                  className="bg-[#293241] text-white px-5 py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
