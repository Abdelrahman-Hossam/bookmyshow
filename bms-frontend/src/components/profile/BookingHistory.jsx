import React from "react";
import { ordersData } from "../../utils/constants";
import { MdChair } from "react-icons/md";

const BookingHistory = () => {
  return (
    <div className="px-6 rounded-md">
      <h3 className="text-xl font-semibold mb-4">Your Orders</h3>

      {ordersData.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-md mb-4 overflow-hidden shadow-sm border border-gray-200"
        >
          {/* Main Booking Info Container (White Background) */}
          <div className="p-5">
            <div className="flex items-start gap-10">
              {/* Movie Poster */}
              <img
                src={order.poster}
                alt=""
                className="w-30 h-40 object-cover rounded"
              />

              {/* Divider */}
              <div className="h-40 border-l border-gray-300 border-dashed"></div>

              {/* Order Details */}
              <div className="flex items-start justify-between w-full">
                <div className="flex-1">
                  <p className="font-normal text-lg">{order.title}</p>
                  <p className="text-sm text-gray-500">{order.format}</p>

                  <p className="text-sm font-semibold text-gray-700 mt-2">
                    {order.datetime} - {order.cinema}
                  </p>

                  <small className="text-gray-700 mt-1 block">
                    Quantity: {order.quantity}
                  </small>

                  <div className="text-md font-semibold text-gray-700 mt-2 flex items-center">
                    <MdChair
                      className="inline items-center mr-2 text-gray-500"
                      size={24}
                    />
                    {order.seats}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 font-medium">M-Ticket</p>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mt-4 pt-4 border-t border-gray-100 text-right">
              <p className="text-sm text-gray-500">
                Ticket: ₹{order.ticket.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">
                Convenience Fees: ₹{order.fee.toFixed(2)}
              </p>
              <p className="text-xl font-bold mt-1 text-black">
                ₹{order.total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Footer Grid (Matches Page Background) */}
          <div className="bg-gray-100 p-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-black">Booking Date & Time</p>
              <p>{order.bookingTime}</p>
            </div>
            <div>
              <p className="font-semibold text-black">Payment Method</p>
              <p>{order.paymentMethod}</p>
            </div>
            <div>
              <p className="font-semibold text-black">Transaction ID</p>
              <p>{order.transactionId || order.bookingTime}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;
