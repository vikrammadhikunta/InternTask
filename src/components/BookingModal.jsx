import React, { useState } from "react";
import toast from "react-hot-toast";

const BookingModal = ({ ride, onClose }) => {
  const today = new Date().toISOString().split("T")[0];

  const [step, setStep] = useState(1);
  const [date, setDate] = useState(today);
  const [packageType, setPackageType] = useState("recommended");

  const MAX_TRAVELLERS = 10;

  const [travellers, setTravellers] = useState([
    {
      name: "",
      phone: "",
      selected: true,
      isEditing: true,
      thumb: false
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const ticketPrice = ride.ticketPrice;
  const lifeJacketPrice = packageType === "recommended" ? 100 : 0;

  const selectedTravellers = travellers.filter(
    t => t.selected && !t.isEditing
  );
  const count = selectedTravellers.length;

  const ticketTotal = count * ticketPrice;
  const jacketTotal = count * lifeJacketPrice;
  const gst = ticketTotal * 0.18;
  const finalAmount = ticketTotal + jacketTotal + gst - discount;


  const updateTraveller = (i, field, value) => {
    const copy = [...travellers];

    if (field === "name") {
      if (value.length > 100) {
        toast.error("Name cannot exceed 100 characters");
        return;
      }
    }

    if (field === "phone") {
      if (!/^\d*$/.test(value)) {
        toast.error("Only numbers allowed in phone number");
        return;
      }

      if (value.length > 10) {
        toast.error("Phone number cannot exceed 10 digits");
        return;
      }
    }

    copy[i][field] = value;
    setTravellers(copy);
  };


  const saveTraveller = (i) => {
    const t = travellers[i];

    if (!t.name || !t.phone) {
      toast.error("Name and phone number are required");
      return;
    }

    if (t.phone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits");
      return;
    }

    const copy = [...travellers];
    copy[i].isEditing = false;
    setTravellers(copy);

    toast.success("Traveller saved successfully");
  };

  const editTraveller = (i) => {
    const copy = [...travellers];
    copy[i].isEditing = true;
    setTravellers(copy);
  };

  const deleteTraveller = (i) => {
    setTravellers(travellers.filter((_, index) => index !== i));
    toast.success("Traveller removed");
  };

  const addTraveller = () => {
  if (travellers.length >= MAX_TRAVELLERS) {
    toast.error("You can add a maximum of 10 travellers only");
    return;
  }

  setTravellers([
    ...travellers,
    { name: "", phone: "", selected: true, isEditing: true, thumb: false }
  ]);
};



  const validateBeforeNext = () => {
    if (!date) {
      toast.error("Please select a date");
      return false;
    }

    if (travellers.some(t => t.isEditing)) {
      toast.error("Please save all traveller details");
      return false;
    }

    if (count === 0) {
      toast.error("Select at least one traveller for the ride");
      return false;
    }

    return true;
  };


  const applyPromoCode = () => {
    if (promoCode === "NEW10") {
      if (count >= 2) {
        setDiscount(100);
        toast.success("NEW10 applied! ₹100 saved 🎉");
      } else {
        toast.error("NEW10 requires minimum 2 travellers");
      }
    } else if (promoCode === "NEW20") {
      if (count >= 5) {
        setDiscount(200);
        toast.success("NEW20 applied! ₹200 saved 🎉");
      } else {
        toast.error("NEW20 requires minimum 5 travellers");
      }
    } else {
      toast.error("Invalid coupon code. Please check again");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl p-6 relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute right-4 top-4 text-xl">
          ✕
        </button>

        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Booking Details</h2>

            <label className="block mb-2 font-medium">Select Date</label>
            <input
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full mb-4"
            />

            <label className="block mb-2 font-medium">Choose Package</label>
            <div className="space-y-2 mb-6">

                <div
                    onClick={() => setPackageType("recommended")}
                    className={`border p-3 rounded-lg cursor-pointer ${
                    packageType === "recommended" && "border-blue-600 bg-blue-50"
                    }`}
                >
                <p className="font-semibold">Recommended Package</p>
                <p className="text-sm text-gray-600">
                  Ticket Price + Life Jacket ₹100
                </p>
              </div>

              <div
                onClick={() => setPackageType("budget")}
                className={`border p-3 rounded-lg cursor-pointer ${
                  packageType === "budget" && "border-blue-600 bg-blue-50"
                }`}
              >
                <p className="font-semibold">Budget Saver</p>
                <p className="text-sm text-gray-600">Ticket Price only</p>
              </div>

              
            </div>

            <h3 className="font-semibold mb-3">Traveller Details</h3>

            {travellers.map((t, i) => (
              <div key={i} className="border rounded-lg p-3 mb-3">
                {t.isEditing ? (
                  <>
                    <input
                      type="text"
                      placeholder="Name"
                      value={t.name}
                      onChange={(e) =>
                        updateTraveller(i, "name", e.target.value)
                      }
                      className="border rounded px-2 py-1 w-full mb-2"
                    />

                    <input
                      type="tel"
                      placeholder="900299*****"
                      value={t.phone}
                      onChange={(e) =>
                        updateTraveller(i, "phone", e.target.value)
                      }
                      className="border rounded px-2 py-1 w-full mb-2"
                    />

                    <label className="flex items-center gap-2 text-sm mb-3">
                      <input
                        type="checkbox"
                        checked={t.thumb}
                        onChange={() =>
                          updateTraveller(i, "thumb", !t.thumb)
                        }
                      />
                      ThumbPrint Capture
                    </label>

                    <div className="flex gap-3">
                      <button
                        onClick={() => saveTraveller(i)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                      >
                        Save
                      </button>

                      <button
                        onClick={() => deleteTraveller(i)}
                        className="border px-3 py-1 rounded-lg text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{t.name}</span>
                      <div className="flex gap-3">
                        <button onClick={() => editTraveller(i)}>
                          <i className="ri-edit-line text-blue-600 text-lg"></i>
                        </button>
                        <button onClick={() => deleteTraveller(i)}>
                          <i className="ri-delete-bin-line text-red-600 text-lg"></i>
                        </button>
                      </div>
                    </div>

                    <label className="flex items-center gap-2 mt-2 text-sm">
                      <input
                        type="checkbox"
                        checked={t.selected}
                        onChange={() =>
                          updateTraveller(i, "selected", !t.selected)
                        }
                      />
                      Coming for ride
                    </label>
                  </>
                )}
              </div>
            ))}

            {travellers.length < 10 && (
                <button
                    onClick={addTraveller}
                    className="flex items-center gap-2 text-blue-600 font-medium mb-6"
                >
                    <i className="ri-add-line"></i>
                    Add New Traveller
                </button>
            )}

            {travellers.length === 10 && (
                <p className="text-sm text-gray-500 mb-6">
                    Maximum of 10 travellers allowed per booking
                </p>
            )}



            <div className="flex justify-end">
              <button
                onClick={() => validateBeforeNext() && setStep(2)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg"
              >
                Next →
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>

            <div className="space-y-2 text-sm">
              <p>No of Travellers: <b>{count}</b></p>
              <p>Ticket Total: ₹{ticketTotal}</p>
              <p>GST (18%): ₹{gst.toFixed(2)}</p>
              <p>Life Jacket: ₹{jacketTotal}</p>
              <p>Discount: ₹{discount}</p>
              <hr />
              <p className="font-semibold text-lg">
                Final Amount: ₹{finalAmount.toFixed(2)}
              </p>
            </div>

            <div className="mt-4">
              <h2 className="font-semibold mb-2">Offers for you</h2>

              <div className="flex items-center border rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Have a promo code?"
                  value={promoCode}
                  onChange={(e) =>
                    setPromoCode(e.target.value.toUpperCase())
                  }
                  className="px-3 py-2 w-full outline-none"
                />
                <button
                  onClick={applyPromoCode}
                  className="bg-black text-white px-5 py-2"
                >
                  Apply
                </button>
              </div>

              New10 - ₹100 off on min 2 travellers <br />
              New20 - ₹200 off on min 5 travellers
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(1)}
                className="border px-4 py-2 rounded-lg"
              >
                ← Prev
              </button>

              <button
                className="bg-green-600 text-white px-6 py-2 rounded-lg"
                onClick={() => {
                    onClose();
                    toast.success("Payment Successful 🎉")}
                }
              >
                Pay Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
