import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-5 h-5 border-2 border-t-2 border-gray-200 border-t-white rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
