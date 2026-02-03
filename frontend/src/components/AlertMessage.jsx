import React from "react";

const AlertMessage = ({ isClose, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 animate-fadeIn">
        <h2 className="text-xl font-semibold text-gray-900 text-center">
          Cancel Order
        </h2>
        <p className="text-sm text-gray-600 text-center mt-2">
          Are you sure to delete this order
        </p>

        <div className="flex gap-3 mt-10">
          <button
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            onClick={isClose}
          >
            No
          </button>

          <button onClick={onCancel} className="flex-1 px-4 py-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-500/90 transition">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertMessage;
