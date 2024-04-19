import React, { useState, useEffect, useRef } from "react";
import { FaRegComments } from "react-icons/fa6";
import { Chat } from "../chat/Chat";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Zapin() {
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
        className="w-24 h-24 bg-primaryOrange fixed right-8 bottom-8 rounded-full hover:w-56 duration-150 flex items-center justify-center cursor-pointer"
        onClick={toggleChat}
      >
        <FaRegComments className="text-white w-12 h-12 absolute transition-opacity duration-150 hover:opacity-0"/>
        <h1 className="opacity-0 absolute transition-opacity duration-150 flex text-white justify-center text-center items-center w-full h-full font-bold text-xl hover:opacity-100">
          Alguma dúvida?
        </h1>
      </div>
      )}

      {isOpen && (
        <div className="flex bg-white fixed w-screen h-screen md:w-96 md:h-2/3 md:right-10 md:bottom-10 md:border-solid md:border-primaryOrange md:border-2 md:rounded-xl" ref={chatRef}>
            <Header isOpen={isOpen} toggleChat={toggleChat} />
            <Chat />
            <Footer />
        </div>
      )}
    </>
  );
}
