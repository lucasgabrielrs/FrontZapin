import React, { useState, useEffect, useRef } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

export function ChatIa() {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null); // Referência ao container do chat

  // Função para alternar entre abrir e fechar o chat
  const toggleChat = () => setIsOpen(!isOpen);

  // Função para fechar o chat se clicar fora dele
  const handleClickOutside = (event) => {
    if (chatRef.current && !chatRef.current.contains(event.target)) {
      setIsOpen(false); // Fecha o chat
    }
  };

  // Adiciona o ouvinte quando o componente é montado e o remove quando é desmontado
  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      html.classList.add("overflow-hidden");
    } else {
      html.classList.remove("overflow-hidden");
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <div
          className="w-24 h-24 bg-primaryOrange fixed right-8 bottom-8 rounded-full hover:w-56 duration-150 flex items-center justify-center"
          onClick={toggleChat}
        >
          <h1 className="opacity-0 duration-75 flex text-white justify-center text-center items-center w-full h-full font-bold text-xl hover:opacity-100">
            Alguma dúvida?
          </h1>
        </div>
      )}

      {isOpen && (
        <div
          className="flex bg-white fixed top-0 left-0 w-screen h-screen"
          ref={chatRef}
        >
          <div className="flex absolute w-full h-20 bg-primaryOrange top-0">
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
          <div className="absolute rounded-lg border-solid border-2 border-primaryOrange w-60 left-4 bottom-2 bg-fundoSendbox">
            <input
              className="appearance-none border-none m-0 bg-transparent focus:outline-none w-full p-2"
              type="text"
              name="send_message"
              id="send_message"
              placeholder="Digite sua dúvida..."
            />
          </div>
          <div className="absolute right-2 bottom-2 bg-primaryOrange rounded-full pt-3 w-12 h-12 text-white cursor-pointer text-center font-semibold hover:bg-white hover:text-primaryOrange hover:border-solid hover:border-2 hover:border-primaryOrange duration-75">
            <button>
              <RiSendPlaneFill className="w-6 h-6" />
            </button>
          </div>

          <div className="flex pb-16 pt-8 pl-8 pr-8 flex-col justify-end grow">
            <div className="p-3 w-full max-w-72 text-base font-normal mb-4 leading-6 bg-primaryOrange text-white rounded-md rounded-br-none self-end">
              Hello world!
            </div>
            <div className="p-3 w-full max-w-72 text-base font-normal mb-4 leading-6 bg-primaryOrange text-white rounded-md rounded-br-none self-end">
              Hello world!
            </div>

            <div className="p-3 w-full max-w-72 text-base font-normal mb-4 leading-6 bg-primaryOrange text-white rounded-md rounded-bl-none self-start">
              <span className="block mb-4 font-bold">Zapin</span>
              Olá mundo!
            </div>
            <div className="p-3 w-full max-w-72 text-base font-normal mb-4 leading-6 bg-primaryOrange text-white rounded-md rounded-bl-none self-start">
              <span className="block mb-4 font-bold">Zapin</span>
              Olá mundo!
            </div>
          </div>
        </div>
      )}
    </>
  );
}
