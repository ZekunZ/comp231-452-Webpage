"use client";
import CheckoutForm from "@/components/CheckoutForm";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { useRouter } from "next/navigation";
import RequestForm from "@/components/RequestForm";
import LogoUpload from "@/components/LogoUpload";

const options = [
  { value: "adMoreVisible", label: "Make ads more visible" },
  { value: "IntroduceIP", label: "Introduce character or IP" },
  { value: "UseCharacter", label: "Use characters of the game" },
  { value: "HostEvents", label: "Host events" },
  { value: "AdInteraction", label: "Know the statistics of ads interactions" },
  { value: "AddLogo", label: "Add logo to the game" },
  { value: "AddProduct", label: "Add product in the game" },
];

const Request = () => {
  const [request, setRequest] = useState(options[0]);
  const router = useRouter();

  const handleChange = (request: any) => {
    setRequest(request);
  };

  const Form = () => {
    switch (request.value) {
      case "adMoreVisible":
        return (
          <h1 className="text-xl">
            Please check out and we will make your advertisement more visible!
          </h1>
        );
      case "IntroduceIP":
        return <RequestForm option={"IntroduceIP"} />;
      case "UseCharacter":
        return <RequestForm option={"UseCharacter"} />;
      case "HostEvents":
        return <RequestForm option={"HostEvents"} />;
      case "AdInteraction":
        return (
          <h1 className="text-xl">
            Please check out to see your advertisement interaction statistics!
          </h1>
        );
      case "AddLogo":
        return <LogoUpload />;
      case "AddProduct":
        return <RequestForm option={"AddProduct"} />;
    }
  };

  const cost = () => {
    switch (request.value) {
      case "adMoreVisible":
        return 199;
      case "IntroduceIP":
        return 299;
      case "UseCharacter":
        return 399;
      case "HostEvents":
        return 199;
      case "AdInteraction":
        return 299;
      case "AddLogo":
        return 99;
      case "AddProduct":
        return 99;
      default:
        return 0;
    }
  };

  const pay = () => {
    if (
      ["IntroduceIP", "UseCharacter", "HostEvents", "AddProduct"].includes(
        request.value
      )
    ) {
      router.push("/game");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-full lg:p-0 p-4 sm:mb-6 mb-0">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-10">
        <div className="col-span-1">
          <h1 className="text-3xl font-bold mb-10">Your Request</h1>
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            Select your request
          </label>
          <Select
            primaryColor={"indigo"}
            value={request}
            onChange={handleChange}
            options={options}
          />
          <div className="mt-4">
            <Form />
          </div>
        </div>
        <div className="col-span-1">
          <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
              The cost for your request
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ${(cost() * 1.13).toFixed(2)}
              <span className="text-sm text-gray-600">
                {" "}
                One time fee {" $" + cost() + " "} plus tax $
                {(cost() * 0.13).toFixed(2)}
              </span>
            </p>
            <p className="text-m mt-4 text-gray-600 dark:text-gray-100">
              For your request: {request.label}
            </p>
          </div>
          <div>
            <CheckoutForm onClick={pay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
