import React from "react";
import { FaCommentDots, FaHeadset, FaRegFileAlt } from "react-icons/fa";

const CustomerHelp = () => {
  return (
    <div>
      <section className="bg-[#2C3E50] max-w-10/12 mx-auto text-white py-16 px-6 md:px-20 rounded-xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          {/* --- Left Illustration --- */}
          <div className="flex justify-center">
            <div className="relative bg-[#22313F] rounded-2xl p-8 md:p-12 shadow-xl flex flex-col items-center">
              <div className="absolute -top-4 left-4 bg-yellow-400 text-black text-sm rounded-md px-3 py-1 shadow-md flex items-center gap-1">
                <FaCommentDots /> Need Help?
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                alt="Support Agent"
                className="w-44 md:w-56 mx-auto mb-4"
              />
              <p className="text-gray-300 text-center text-sm md:text-base">
                Our team is always here to assist you with any queries.
              </p>
            </div>
          </div>

          {/* --- Right Content --- */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Fast & <span className="text-orange-400">Dedicated Support</span>
            </h2>
            <p className="text-gray-300 mb-10">
              Got a question, comment or concern? For more information, we can
              assist!
            </p>

            {/* --- Two Cards --- */}
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Documentation Card */}
              <div className="flex flex-col items-start bg-[#34495E] p-6 rounded-2xl hover:bg-[#3E5871] transition">
                <FaRegFileAlt className="text-orange-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">
                  Detailed Documentation
                </h3>
                <p className="text-gray-300 text-sm">
                  Extensive documentation explains how to install and configure
                  the theme.
                </p>
              </div>

              {/* Support Center Card */}
              <div className="flex flex-col items-start bg-[#34495E] p-6 rounded-2xl hover:bg-[#3E5871] transition">
                <FaHeadset className="text-orange-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Support Center</h3>
                <p className="text-gray-300 text-sm">
                  Premium support system. Easily manage your ticket. Support
                  within 1 working day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerHelp;
