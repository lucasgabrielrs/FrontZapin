import { AiOutlineClose } from "react-icons/ai";
import React from "react";

export function Header ({ toggleChat }) {
    return (
        <div className="flex absolute w-full h-20 bg-primaryOrange top-0 md:rounded-t-lg">
            <div className="flex w-screen gap-10 items-center">
              <img
                src="./images/fotoZapin.svg"
                className="ml-10 w-12 h-12 rounded-full"
              />
              <h1 className="text-white text-2xl font-bold">Zapin</h1>
            </div>
            <div className="flex items-center mr-5">
              <AiOutlineClose
                className="w-9 h-9 bg-none text-white"
                onClick={toggleChat}
              />
            </div>
        </div>
    );
}

