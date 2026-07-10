import { motion } from "framer-motion";
import { Clock3, ShieldCheck, Users } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const budgets = [
    "Less than $5K",
    "$5K - $10K",
    "$10K - $20K",
    "$20K - $50K",
    "More than $50K",
  ];

  const [selectedBudget, setSelectedBudget] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <h3 className="text-3xl font-medium mb-10">
          Let's Discuss Your Project
        </h3>

        {/* Name */}

        <div className="mb-6">
          <label className="block mb-2 font-medium">Full Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-violet-600 transition"
          />
        </div>

        {/* Email & Phone */}

        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <div>
            <label className="block mb-2 font-medium">Your Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="yourmail@gmail.com"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-violet-600 transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">WhatsApp Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-violet-600 transition"
            />
          </div>
        </div>

        {/* Budget */}

        <div className="mb-8">
          <label className="block mb-4 font-medium">Project Budget</label>

          <div className="flex flex-wrap gap-3">
            {budgets.map((budget) => (
              <button
                type="button"
                key={budget}
                onClick={() => setSelectedBudget(budget)}
                className={`px-5 py-3 rounded-xl border transition-all duration-300

          ${
            selectedBudget === budget
              ? "bg-violet-600 border-violet-600 text-white"
              : "border-gray-300 hover:border-violet-600 hover:text-violet-700"
          }
          `}
              >
                {budget}
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}

        <div>
          <label className="block mb-2 font-medium">Project Details</label>

          <textarea
            rows={6}
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className="w-full rounded-xl border border-gray-300 px-5 py-4 resize-none outline-none focus:border-violet-600 transition"
          />
        </div>

        {/* Button */}

        <button className="group mt-8 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all">
          Let's Connect
          <span className="group-hover:translate-x-1 transition">→</span>
        </button>
      </div>
    </>
  );
};

export default ContactForm;
