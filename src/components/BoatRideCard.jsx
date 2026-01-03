import React, { useState } from "react";
import BookingModal from "./BookingModal";

const BoatRideCard = ({ ride }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        <img
          src={ride.img}
          alt={ride.title}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold">{ride.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{ride.place}</p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-blue-600 font-bold text-lg">
              ₹{ride.ticketPrice}
            </span>
            <span className="text-sm text-gray-500">/ person</span>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>
      </div>

      {open && (
        <BookingModal ride={ride} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default BoatRideCard;
