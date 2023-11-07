import React from "react";

const CheckoutForm = ({ onClick }: any) => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-md shadow-md overflow-hidden">
      <div className="px-6 py-4 bg-gray-900 text-white">
        <h1 className="text-lg font-bold">Credit Card</h1>
      </div>
      <form>
        <div className="px-6 py-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="card-number"
            >
              Card Number
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="card-number"
              type="text"
              placeholder="**** **** **** ****"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="expiration-date"
            >
              Expiration Date
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiration-date"
              type="text"
              placeholder="MM/YY"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              type="text"
              placeholder="***"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
              Cardholder Name
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>

          <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
