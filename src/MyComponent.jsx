import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const MyComponent = () => {
  const [modalData, setModalData] = useState(null);
  function handlerNo1() {}



  return (
    <div className="relative">
      <div className="w-[100vw] h-[100vh] bg-gray-100 flex flex-col justify-start items-center">
        <div className="bg-blue-400 flex justify-evenly w-full p-2">
          <h1 className="font-semibold text-lg font-serif">xyz.com</h1>
          <button
            onClick={() =>
              setModalData({
                heading: "Get Started With Us",
                paragraph:
                  "Signup with us to utilize available services on our site",
                handler1: handlerNo1,
                handler2: ()=>setModalData(null),
                btnText1: "Signup",
                btnText2: "Cancel",
              })
            }
            className="font-semibold text-lg font-serif"
          >
            Signup
          </button>
        </div>

        <div className="flex flex-col gap-5">

          <div className="bg-white text-black p-8">
            <h2 className="text-xl font-semibold">Heading</h2>
            <p className="text-lg font-serif">
              This is paragraph.This is paragraph.This is paragraph.This is
              paragraph This is paragraph.This is paragraph.This is
              paragraph.This is paragraph. This is paragraph.This is
              paragraph.This is paragraph.This is paragraph This is
              paragraph.This is paragraph.This is paragraph.This is paragraph
              This is paragraph.This is paragraph.This is paragraph.This is
              paragraph This is paragraph.This is paragraph.This is
              paragraph.This is paragraph
            </p>
          </div>

          <div className="bg-white text-black p-8">
            <h2 className="text-xl font-semibold">Heading</h2>
            <p className="text-lg font-serif">
              This is paragraph.This is paragraph.This is paragraph.This is
              paragraph This is paragraph.This is paragraph.This is
              paragraph.This is paragraph. This is paragraph.This is
              paragraph.This is paragraph.This is paragraph This is
              paragraph.This is paragraph.This is paragraph.This is paragraph
              This is paragraph.This is paragraph.This is paragraph.This is
              paragraph This is paragraph.This is paragraph.This is
              paragraph.This is paragraph
            </p>
          </div>

        </div>
      </div>

      {modalData && <Modal modalData={modalData} />}
    </div>
  );
};

export default MyComponent;
