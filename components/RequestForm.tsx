import React from "react";

const RequestForm = ({ option }: { option: string }) => {
  return (
    <div className="max-w-lg mt-10 bg-white rounded-md shadow-md overflow-hidden">
      <div className="px-6 py-4 bg-gray-900 text-white">
        <h1 className="text-lg font-bold">
          Please fill in the following information and check out!
        </h1>
      </div>
      <form>
        <div className="px-6 py-4">
          {option === "HostEvents" && (
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="event-name"
              >
                Event name
              </label>
              <input
                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="event-name"
                type="text"
                placeholder=""
                required
              />
            </div>
          )}

          {option === "UseCharacter" && (
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="character-name"
              >
                Character which you want to use
              </label>
              <input
                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="character-name"
                type="text"
                placeholder=""
                required
              />
            </div>
          )}

          {option === "IntroduceIP" && (
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="ip-name"
              >
                The IP you want to introduce
              </label>
              <input
                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ip-name"
                type="text"
                placeholder=""
                required
              />
            </div>
          )}

          {option === "AddProduct" && (
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="prodcut-name"
              >
                The product you want to add
              </label>
              <input
                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product-name"
                type="text"
                placeholder=""
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="company-name"
            >
              Company name
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company-name"
              type="text"
              placeholder=""
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="abc@gmail.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
              Phone
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="(123)1231234"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-bold text-gray-700 dark:text-white"
            >
              More details you would like us to know
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your details here..."
            ></textarea>
          </div>

          <div className="mb-4">
            <input
              type="checkbox"
              id="term"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label
              className="mx-2 text-sm text-gray-700 font-bold"
              htmlFor="term"
            >
              Check here to indicate that you have read and agree to the terms
              of Dice of Fate game.
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
