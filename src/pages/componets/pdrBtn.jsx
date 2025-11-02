import React from "react";

function PdrBtn({ indx, handleBtnSelect, selectedbtn, text }) {
  return (
    <button
      onClick={() => handleBtnSelect(indx)}
      className={`font-semibold px-6 py-2 rounded-full border-gray-500
        ${
          selectedbtn
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:scale-105"
        }`}
    >
      {text}
    </button>
  );
}

export default PdrBtn;
