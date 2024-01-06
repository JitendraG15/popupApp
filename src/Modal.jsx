import React from "react";

const Modal = ({ modalData }) => {
  return (
    <div className="backdrop-brightness-50 fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 ">
      <div
        className="bg-white flex flex-col p-6 border-2 border-cyan-300 
      text-black w-2/6 m-auto rounded-md absolute top-[25%] left-[35%] "
      >
        <h1 className="text-cyan-400 font-bold text-xl">{modalData.heading}</h1>

        <p className="text-lg">{modalData.paragraph}</p>

        <div className="flex justify-center items-center gap-5">
          <button
            onClick={() => modalData.handler2()}
            className="bg-blue-400 text-white text-lg font-semibold px-4 py-1 rounded-md font-serif"
          >
            {modalData.btnText1}
          </button>
          <button
            onClick={() => modalData.handler2()}
            className="bg-red-400 text-white text-lg font-semibold px-4 py-1 rounded-md font-serif"
          >
            {modalData.btnText2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
