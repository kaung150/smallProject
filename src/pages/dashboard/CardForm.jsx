import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";

const CardForm = () => {
  const { isDark } = useStateContext();

  return (
    <>
      <div
        className={`min-w-4xl mx-5 h-screen  ${
          isDark ? "bg-[#2a2b32]" : "bg-white px-5"
        }`}
      >
        <h1 className="text-3xl font-poppinsBold  mb-8 text-center text-slate-600">
          Add A Business Card
        </h1>
        <form action="">
          <div className="flex flex-col w-full md:flex-row gap-2">
            <div className="w-full ">
              <div>
                <label className="block text-gray-700 font-poppinsRegular text-sm">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="User Name"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mt-2">
                <label className="block text-gray-700 font-poppinsRegular text-sm">
                  Company
                </label>
                <input
                  placeholder="Company Name"
                  type="text"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mt-2">
                <label className="block text-gray-700 font-poppinsRegular text-sm">
                  Position
                </label>
                <input
                  type="text"
                  placeholder="Position Title"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mt-2">
                <label className="block text-gray-700 font-poppinsRegular text-sm">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mt-2">
                <label className="block text-gray-700 font-poppinsRegular text-sm">
                  Viber
                </label>
                <input
                  type="text"
                  placeholder="Viber Number"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="w-full">
              <div>
                <label className="block text-gray-700 font-poppinsRegular text-sm">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div className="mt-2">
                <label className="block text-gray-700 font-poppinsRegular text-sm">
                  Website
                </label>
                <input
                  type="text"
                  placeholder="Website Address"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div className="mt-2">
                <label className="block text-gray-700 font-poppinsRegular text-sm">
                  Public or Draft
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div className="mt-2">
                <label className="block text-gray-700 font-poppinsRegular text-sm">
                  Image
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div className="mt-2">
                <label className="block text-gray-700 font-poppinsRegular text-sm">
                  Tags
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
          <button className="bg-slate-800 mt-3 px-5 py-1 rounded-lg text-white hover:bg-slate-600">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CardForm;
