import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPaperclip,
  faSliders,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
const ChatAssistant = () => {
  const bagsContainerRef = useRef(null);

  const [selectedButtonIndices, setSelectedButtonIndices] = useState([]);
  const bags = ["Clutch", "Fabric Lining", "Baggit", "Multi", "More"];
  const filters = ["Strap-Long", "Colour", "Size", "Brand", "Material"];
  const [arrowDisable, setArrowDisable] = useState({
    left: true,
    right: false,
  });
  const handleUserInput = (e) => {};
  const handleButtonClick = (index) => {
    setSelectedButtonIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        // If the index is already selected, remove it
        return prevIndices.filter((i) => i !== index);
      } else {
        // If the index is not selected, add it
        return [...prevIndices, index];
      }
    });
  };

  const handleHorizontalScroll = (direction) => {
    const container = bagsContainerRef.current;
    const scrollAmount = 150; // Adjust this value as needed

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="bg-white shadow-lg rounded-3xl p-2 w-360 mt-48 mb-12">
        <div className="flex items-center rounded-t-2xl h-20 mb-4 bg-blue-50">
          <div className="relative overflow-hidden bg-white rounded-full w-12 h-12 mr-2 ml-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/6baa/a9c9/7cbb691d0bf8e4efbb09d8e91c2e986c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eVKRkgBouutMMUdNZ4ueKNPi9bMhMMLnISqKPW-dU~MBc42xjue~8j9hjcAqiIuzuss-XINFsTsBr3j3uYZDwiAg15nW1A6AFCj0dZFYt30YWmdEiODBg3FC3k~HdvMl18054D9LgeKrHAXqWUv4HmMsAIgytLrj7gdFK4vxRO1lXauNiVREtHHOM8PW768rYkYpoTkZc-excULb67QdJIr3rcTV-G4jUKPQjo5j9HDZr-fdphQ8APPByY75NO7uCpCwD9oZbGkJmKs6vuvoljm6Xyg7V0bDIoqte8kAnPTya7nVvumDK2an5YZcLGJtCwajrUFoTlmHjTu2gFSmBA__"
              alt="Assistant Avatar"
              className="object-cover w-16 h-16"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="text-blue-500 font-bold text-lg">Timpu </h1>
            </div>
            <div className="text-blue-500 font-medium">
              <span className="">Chat assistant </span>
              <span className=" ml-24 inline-block h-3 w-3 bg-green-500 rounded-full"></span>
              <span className=" ml-1 mr-3 ">Online</span>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto p-2 h-1020">
          <div
            className={`inline-block px-4 py-2 rounded-xl 
                  bg-gradient-to-r from-blue-100 to-white text-gray-800
                max-w-60 mb-8 text-left`}
          >
            Hi Sam! I am your personal shopping assistant , how can i help you
            today ?
          </div>
          <div
            className={`inline-block px-4 py-2 rounded-xl bg-rgb-220-247-253 ml-24 max-w-60 mb-8 text-right`}
          >
            I am looking for a hand bag, with long strap .
          </div>
          <h1 className="text-gray-400 ">Popular tags for handbag</h1>
          <div className="flex justify-center mb-4">
            <button
              onClick={() => handleHorizontalScroll("left")}
              className={` text-blue-500 rounded-l-lg px-2 py-2 `}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <div
              className="bag-container flex overflow-x-hidden  pb-2"
              ref={bagsContainerRef}
            >
              {bags.map((str, i) => (
                <button
                  key={i}
                  className="bg-blue-100 text-blue-500 rounded-lg px-4 py-2 m-1 whitespace-nowrap"
                >
                  {str}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleHorizontalScroll("right")}
              className={`text-blue-500 rounded-r-lg px-2 py-2`}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
          <div
            className={`inline-block px-4 py-2 rounded-xl 
                  bg-gradient-to-r from-blue-100 to-blue-25 text-gray-800
                max-w-80 mb-8 text-left`}
          >
            <div className="bg-white rounded-lg w-60 h-30 p-2 flex flex-row">
              <img
                src="https://s3-alpha-sig.figma.com/img/689e/2faf/68cf127f505e43e548e19296947c8d09?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvJHNTJnVTam5IbdgovtdJjs~9a8CoaetZ9TxA04XJcYBUZm1NceknHk1t7HmanN27TDiDVXjVQFTExU1nuugTqpCmV3TBzPvCClYwB1CK3X5M8J0WJox6-hRVZ4Cy8LqNcuMaR3MXuJxKbOgBYzqlqlnkL0eALLnh0C9nyMlzkoGrIRO-V6pOxocffZoGWw6M3-PFbA83NbfA-Qt9Sc4I8MWZ-QVjeTjuFvBim04A6I1amF4biHstH3OlSpJnd0wMkcj-dz5~6Lv8dBYLe6R32Hy9xGLSRHLU9WGKtKuvnuZzjlKpF~HK37yqkVCFl4XPjlzeIBWm6Udx8zBOTgtw__"
                alt="Assistant Avatar"
                className="object-cover w-20 h-12 rounded-lg"
              />
              <div className="ml-4  flex flex-col">
                <span className="font-bold">Bags on Timpu</span>
                <div>
                  <span className="text-sm mt-2 text-gray-400">
                    1123 Products
                  </span>
                  <FontAwesomeIcon
                    className="ml-6 text-gray-400"
                    icon={faAngleRight}
                  />
                </div>
              </div>
            </div>
            Or set filter and help us choose the best bag for you.
          </div>

          <div className="flex flex-row">
            <span className="text-gray-400">Select filters</span>
            <div className="ml-44 text-gray-400 ">
              <FontAwesomeIcon icon={faSliders} />
              <span>Filter</span>
            </div>
          </div>
          <div className="flex flex-wrap pb-2" ref={bagsContainerRef}>
            {filters.map((str, i) => (
              <button
                key={i}
                className={` rounded-md px-4 text-md m-1 h-6 whitespace-nowrap ${
                  selectedButtonIndices.includes(i)
                    ? "bg-blue-200 text-blue-500 "
                    : "bg-gray-100 text-gray-500"
                }`}
                onClick={() => handleButtonClick(i)}
              >
                {str}
                <FontAwesomeIcon className="ml-2" icon={faTimes} />
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center rounded-b-2xl h-20 bg-blue-50">
          <div className="flex">
            <div className=" bg-white rounded-lg w-64 ml-2 outline-blue-500">
              <input
                type="text"
                onChange={handleUserInput}
                className="flex-1 ml-2 px-3 py-2"
                placeholder="Type your message"
              />
              <FontAwesomeIcon icon={faPaperclip} />
            </div>
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2">
              <FontAwesomeIcon className=" ml-2 mr-2" icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
