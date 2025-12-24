import React, { useState } from "react";

const EnquiryForm = () => {
  const [name, setName] = useState("");
  const [enquiryFor, setEnquiryFor] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const enquiryDetails = { name, enquiryFor, mobileNo, email, message };

      await fetch("enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiryDetails),
      });

      setName("");
      setEmail("");
      setEnquiryFor("");
      setMobileNo("");
      setMessage("");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT INFO PANEL */}
        <div className="bg-indigo-700 text-white p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">Tech Solutions</h1>
            <p className="text-indigo-100 leading-relaxed">
              We provide professional software services, admissions guidance
              and technical solutions. Fill the form and our team will contact you.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <p>📍 Location: India</p>
              <p>📞 Phone: +91 98765 43210</p>
              <p>📧 Email: info@techsolutions.com</p>
            </div>
          </div>

          <p className="text-xs text-indigo-200">
            © 2025 Tech Solutions. All rights reserved.
          </p>
        </div>

        {/* FORM PANEL */}
        <div className="p-8">
          <h2
  className="
    text-2xl font-semibold text-slate-700 mb-6 text-center
    bg-gradient-to-r from-indigo-500 to-purple-500
    text-white py-3 rounded-xl shadow-md
    hover:from-purple-500 hover:to-indigo-500
    hover:text-yellow-200
    transition-all duration-300
    cursor-default
  "
>
  Enquiry Form
</h2>


          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Name
              </label>
              <input
                required
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Enquiry For */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Enquiry For
              </label>
              <select
                value={enquiryFor}
                onChange={(e) => setEnquiryFor(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="">Select option</option>
                <option value="admission">Admission</option>
                <option value="software">Software</option>
                <option value="device">Device</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Mobile Number
              </label>
              <input
                required
                type="text"
                placeholder="Enter mobile number"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Email
              </label>
              <input
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Message
              </label>
              <textarea
                required
                rows="4"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold
              hover:bg-indigo-700 transition disabled:opacity-60"
            >
              {isLoading ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
