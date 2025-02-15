// import React from "react";

const Contact = () => {
  return (
    <section id="contact" className=" bg-gray-800 text-gray-400 py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-8">
        <div className="text-center text-gray-400">
          <h2 className="text-3xl font-semibold">Contact Info</h2>
          <p className="mt-4">Address: Your Address Here</p>
          <p>Email: your-email@example.com</p>
          <p>Number: 979758767</p>
          {/* <p>Email: your-email@example.com</p> */}
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Contact Form</h2>
          <form className="space-y-4 mt-8">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-lg text-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-lg text-gray-400"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 border rounded-lg text-gray-400"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 px-10 rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
