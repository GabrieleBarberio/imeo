//WIP
import React from "react";
import { useSelector } from "react-redux";

const MainUserItem: React.FC = () => {
  const user = useSelector((state) => state.auth.user_name);

  return (
    <li className="flex items-center w-full bg-primary-200 rounded-2xl mb-4 p-4">
      {/* Aggiungere icona SVG per la connessione Wi-Fi */}

      <img
        src="https://randomuser.me/api/portraits/thumb/men/74.jpg"
        alt="User"
        className="h-16 w-16 rounded"
      />
      <div className="ml-4">
        <div className="flex flex-col">
          <span className="text-white font-bold text-xl">{user}</span>
          <span className="text-white font-bold text-lg">
            Status: Invisibile
          </span>
        </div>
      </div>
    </li>
  );
};

export default MainUserItem;
