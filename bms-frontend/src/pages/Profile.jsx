import React from "react";
import { tabs } from "../utils/constants";
import { IoMdAdd } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import BookingHistory from "../components/profile/BookingHistory";

const Profile = () => {
  const [activeTab, setActiveTab] = React.useState("Profile");

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Tab Navigation Bar */}
      <div className="bg-[#e5e5e5]">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 py-2 px-4 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 cursor-pointer transition-all ${
                activeTab === tab
                  ? "text-[#f74565] border-b-2 border-[#f74565]"
                  : "text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {activeTab === "Profile" && (
            <>
              {/* Header Gradient Section */}
              <div className="bg-gradient-to-r from-gray-800 to-[#f74565] rounded-t-md px-6 py-6 flex items-center gap-6 text-white">
                <div className="relative w-20 h-20 border-4 border-white rounded-full flex items-center justify-center bg-white text-gray-600">
                  <IoMdAdd size={24} />
                </div>
                <div className="mt-2">
                  <h2 className="text-2xl font-bold">Hi, Abdelrahman Hossam</h2>
                  <small className="underline cursor-pointer flex items-center gap-1">
                    <IoIosLogOut size={20} className="inline" /> Logout
                  </small>
                </div>
              </div>

              {/* Account Details Section */}
              <div className="bg-white px-6 py-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Account Details</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-normal text-gray-500">
                      Email Address
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">testemail@gmail.com</span>
                      <span className="text-green-600 text-[10px] bg-green-100 px-2 py-0.5 rounded font-medium">
                        Verified
                      </span>
                    </div>
                  </div>
                  <FiEdit className="text-pink-500 cursor-pointer" />
                </div>
              </div>

              {/* Personal Details Section */}
              <div className="bg-white p-6 mt-4 rounded-b-md shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-sm font-normal text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      value="Abdelrahman Hossam"
                      readOnly
                      className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 outline-none"
                    />
                  </div>

                  {/* Birthday */}
                  <div>
                    <label className="text-sm font-normal text-gray-600">
                      Birthday (Optional)
                    </label>
                    <input
                      type="date"
                      className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 outline-none"
                    />
                  </div>

                  {/* Identity */}
                  <div>
                    <label className="text-sm font-normal text-gray-600">
                      Gender
                    </label>
                    <select className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 bg-white outline-none">
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  {/* Married Status */}
                  <div>
                    <label className="text-sm font-normal text-gray-600">
                      Married? (Optional)
                    </label>
                    <select className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 bg-white outline-none">
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Save Button Placeholder */}
              <div className="mt-6 flex justify-center">
                <button className="bg-[#f74565] text-white px-10 py-2 rounded-md font-semibold hover:bg-[#d63a56] transition-colors">
                  Save Changes
                </button>
              </div>
            </>
          )}

          {/*HERE*/}
          {activeTab === "Your Orders" && <BookingHistory />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
