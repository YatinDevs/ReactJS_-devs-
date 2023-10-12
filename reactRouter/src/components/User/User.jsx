import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-500 text-center p-4 text-2xl text-white">
      User : {userid}
    </div>
  );
}

export default User;
