import React from "react";

const PaymentModal = ({
  onClick,
  content,
  total,
}: {
  onClick: () => void;
  content: { value: string; label: string };
  total: string;
}) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t mr-4">
              <h3 className="text-3xl font-semibold">
                Thanks for you request!
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                <h2>Your request detail: {" " + content.label}</h2>
                <h2>Your total payment: {" $" + total}</h2>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-gray-800 text-white active:bg-gray-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClick}
              >
                {content.value === "AdInteraction"
                  ? "Check ad interaction"
                  : "Go back to game"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default PaymentModal;
