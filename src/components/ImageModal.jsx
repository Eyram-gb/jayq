import React from "react";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative z-[999]">
        <img src={imageUrl} alt="artwork" className="w-full rounded h-[80vh]" />
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        className="absolute inset-0 z-40 bg-black opacity-70 z-20"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default ImageModal;
