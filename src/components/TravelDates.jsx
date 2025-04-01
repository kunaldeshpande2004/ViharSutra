import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { message } from "antd"; // Import Ant Design message component
import "./custom-datepicker.css"; // Custom styling
import { Navigate, useNavigate } from "react-router-dom";


const DateSelector = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
const navigate = useNavigate()
  const handleContinue = () => {
    if (!startDate || !endDate) {
      message.error("Please select both start and end dates for your trip!");
      return;
    }
    message.success(`Trip booked from ${startDate.toDateString()} to ${endDate.toDateString()}`);
    sessionStorage.setItem('sDate',startDate);
    sessionStorage.setItem('eDate',endDate);
    setTimeout(()=>{
      navigate('/tripreview')
    },2000)
   
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-5 rounded-lg shadow-lg w-100">
        <h2 className="text-2xl font-semibold text-center mb-3">Travel Dates</h2>

        {/* Single Calendar for Selecting Start & End Dates */}
        <DatePicker
          selected={startDate}
          onChange={(update) => setDateRange(update)}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          minDate={new Date()} // Disable past dates
          placeholderText="Select your trip dates"
        />

        {/* Continue Button */}
        <button 
          className="bg-black cursor-pointer text-white w-full p-4 rounded-lg mt-5 text-lg font-semibold"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DateSelector;
