//WIP
import React from "react";
import Chat from "./Chat";
import MainUserItem from "./MainUserItem";
const UserListItem: React.FC<{
  profilePicture: string;
  firstName: string;
  lastName: string;
  onlineStatus: boolean;
}> = ({ profilePicture, firstName, lastName, onlineStatus }) => (
  <li className="flex items-center w-full bg-primary-200 rounded-2xl mb-4 p-4">
    <img src={profilePicture} alt="User" className="h-16 w-16 rounded" />
    <div className="ml-4">
      <div className="flex flex-col">
        <span
          className={`text-white font-bold text-xl ${
            onlineStatus ? "text-green-500" : "text-primary-500"
          }`}
        >
          {firstName} {lastName}
        </span>
        <span
          className={`text-white font-bold text-lg ${
            onlineStatus ? "text-green-500" : "text-primary-500"
          }`}
        >
          {onlineStatus ? "Online" : "Last online: 2 hours ago"}
        </span>
      </div>
    </div>
  </li>
);

const LeftSidebar: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4  p-4 flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <img
            src="/src/assets/logoimeo.png"
            alt="Logo"
            className="h-36 w-36" // Modifica la dimensione del logo qui
          />
        </div>

        {/* Title and Icons */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-2xl font-bold text-opacity-60 font-title"
            style={{ color: "rgba(50, 44, 73, 0.62)" }}
          >
            Friends
          </span>
          <div className="flex">
            <button className="p-2 rounded-md bg-primary-200 custom-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <svg
                  width="32"
                  height="29"
                  viewBox="0 0 32 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.95262 19.5235C3.20286 18.1638 4.89856 17.4 6.66667 17.4H16C17.7681 17.4 19.4638 18.1638 20.714 19.5235C21.9643 20.8831 22.6667 22.7272 22.6667 24.65V27.55C22.6667 28.3508 22.0697 29 21.3333 29C20.597 29 20 28.3508 20 27.55V24.65C20 23.4963 19.5786 22.3899 18.8284 21.5741C18.0783 20.7583 17.0609 20.3 16 20.3H6.66667C5.6058 20.3 4.58839 20.7583 3.83824 21.5741C3.08809 22.3899 2.66667 23.4963 2.66667 24.65V27.55C2.66667 28.3508 2.06971 29 1.33333 29C0.596954 29 0 28.3508 0 27.55V24.65C0 22.7272 0.702379 20.8831 1.95262 19.5235Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.3333 2.9C9.1242 2.9 7.33333 4.84756 7.33333 7.25C7.33333 9.65244 9.1242 11.6 11.3333 11.6C13.5425 11.6 15.3333 9.65244 15.3333 7.25C15.3333 4.84756 13.5425 2.9 11.3333 2.9ZM4.66667 7.25C4.66667 3.24594 7.65144 0 11.3333 0C15.0152 0 18 3.24594 18 7.25C18 11.2541 15.0152 14.5 11.3333 14.5C7.65144 14.5 4.66667 11.2541 4.66667 7.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.6667 7.25C27.403 7.25 28 7.89919 28 8.7V17.4C28 18.2008 27.403 18.85 26.6667 18.85C25.9303 18.85 25.3333 18.2008 25.3333 17.4V8.7C25.3333 7.89919 25.9303 7.25 26.6667 7.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.3333 13.05C21.3333 12.2492 21.9303 11.6 22.6667 11.6H30.6667C31.403 11.6 32 12.2492 32 13.05C32 13.8508 31.403 14.5 30.6667 14.5H22.6667C21.9303 14.5 21.3333 13.8508 21.3333 13.05Z"
                    fill="white"
                  />
                </svg>
              </svg>
            </button>
            <button className="p-2 rounded-md bg-primary-200 custom-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.77351 5.27259C4.43533 5.27259 4.11101 5.41147 3.87188 5.65868C3.63276 5.90589 3.49842 6.24117 3.49842 6.59078V25.0453C3.49842 25.3949 3.63276 25.7302 3.87188 25.9774C4.11101 26.2246 4.43533 26.3635 4.77351 26.3635H22.6248C22.9629 26.3635 23.2872 26.2246 23.5264 25.9774C23.7655 25.7302 23.8998 25.3949 23.8998 25.0453V18.0062C23.8998 17.2782 24.4707 16.6881 25.1749 16.6881C25.8791 16.6881 26.45 17.2782 26.45 18.0062V25.0453C26.45 26.0941 26.047 27.1 25.3296 27.8416C24.6122 28.5832 23.6393 28.9999 22.6248 28.9999H4.77351C3.75898 28.9999 2.78601 28.5832 2.06864 27.8416C1.35126 27.1 0.948242 26.0941 0.948242 25.0453V6.59078C0.948242 5.54197 1.35126 4.53611 2.06864 3.79449C2.78601 3.05287 3.75898 2.63623 4.77351 2.63623H11.5825C12.2867 2.63623 12.8576 3.2264 12.8576 3.95441C12.8576 4.68242 12.2867 5.27259 11.5825 5.27259H4.77351Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.723 0.386087C22.2209 -0.128696 23.0283 -0.128696 23.5262 0.386087L28.6266 5.65881C29.1245 6.1736 29.1245 7.00822 28.6266 7.523L15.8757 20.7048C15.6366 20.952 15.3122 21.0909 14.9741 21.0909H9.87372C9.16951 21.0909 8.59863 20.5007 8.59863 19.7727V14.5C8.59863 14.1504 8.73297 13.8151 8.9721 13.5679L21.723 0.386087ZM11.1488 15.046V18.4545H14.4459L25.9217 6.59091L22.6246 3.18237L11.1488 15.046Z"
                    fill="white"
                  />
                </svg>
              </svg>
            </button>
          </div>
        </div>
        {/* User List Content */}
        <div className="flex flex-col flex-grow">
          <ul className="space-y-2 flex-grow">
            {/* User list items */}
            <UserListItem
              profilePicture="https://randomuser.me/api/portraits/thumb/men/74.jpg"
              firstName="Utente 1"
              lastName=""
              onlineStatus={true}
            />
            {/* Aggiungi altri elementi della lista utenti */}
          </ul>
          {/* Linea di divisione (footer) */}
          <div className="mt-auto border-t border-primary-200 pt-4">
            {/* Utente principale */}
            <MainUserItem />
          </div>
        </div>
      </div>
      {/* ... Altri elementi ... */}

      <div className="w-3/4 bg-gray-200 ">
        {/* Chat component */}
        <Chat />
      </div>
    </div>
  );
};

export default LeftSidebar;
