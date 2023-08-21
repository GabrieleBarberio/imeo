//WIP
import React from "react";

const Chat: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 bg-gray-200">
        <div className="flex flex-col h-full">
          {/* Chat Header */}
          <div className="bg-white p-4 shadow-md flex items-center">
            <div
              className="h-24 w-24 rounded-full bg-gray-300"
              style={{
                background:
                  'url(""), lightgray -0.962px -4.251px / 100% 165.312% no-repeat',
                flexShrink: 0,
                borderRadius: "25px", // border-radius aggiunto
              }}
            />
            <div className="ml-2 flex flex-col">
              <span
                className="text-primary-100 font-title font-bold text-3xl"
                style={{ color: "#5B5682" }}
              ></span>
              <span
                className="text-secondary-100 font-title font-bold text-xl"
                style={{ color: "#69BAA5" }}
              >
                Il mio stato
              </span>
            </div>
            <div className="ml-auto flex space-x-4">
              {/* Buttons */}
              <button
                className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-200"
                style={{ background: "#8076A9" }}
              >
                {/* button icon */}
              </button>
              <button
                className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-200"
                style={{ background: "#8076A9" }}
              >
                {/* button icon */}
              </button>
              <button
                className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-200"
                style={{ background: "#8076A9" }}
              >
                {/* button icon */}
              </button>
              <button
                className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-200"
                style={{ background: "#8076A9" }}
              >
                {/* button icon */}
              </button>
            </div>
          </div>
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col space-y-2 mt-4">
              {/* Chat messages go here */}
              <div className="flex items-start p-6">
                <img
                  src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                  alt="User"
                  className="h-8 w-8 "
                />
                <div className="ml-2 p-2 bg-white rounded-lg shadow-md">
                  <p className="text-gray-800">Test messaggio</p>
                  <span className="text-xs text-gray-500">10:30 AM</span>
                </div>
              </div>
              {/* Add more messages */}
            </div>
          </div>
        </div>
      </div>
      {/* Message Input */}
      <div className="w-1190 h-200 flex items-center px-6 py-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Scrivi un messaggio..."
            className="w-full h-29 text-white bg-primary-300 bg-opacity-57 font-inter text-opacity-50 text-30 font-normal focus:outline-none rounded-3xl pl-14 pr-20"
            style={{
              borderRadius: "20px",
              color: "rgba(255, 255, 255, 0.50)",
              background: "rgba(128, 118, 169, 0.57)",
            }}
          />
          <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Your SVG icon 1 */}
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Your SVG icon 2 */}
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Your SVG icon 3 */}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
