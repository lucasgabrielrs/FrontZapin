import { RiSendPlaneFill } from "react-icons/ri";
import React from "react";

export function Footer() {
  return (
    <div style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}> {/* Garante que o footer não será sobreposto pela barra de navegação */}
      <div className="absolute inset-x-0 bottom-0 flex items-center" style={{ marginBottom: 'env(safe-area-inset-bottom)' }}> {/* Ajusta a margem inferior para considerar a barra de navegação */}
        <div className="rounded-lg border-solid border-2 border-primaryOrange w-3/4 left-4 bottom-2 bg-laranjinha p-2">
          <input
            className="appearance-none border-none bg-transparent focus:outline-none w-full"
            type="text"
            name="send_message"
            id="send_message"
            placeholder="Digite sua dúvida..."
          />
        </div>
        <div className="absolute right-2 bottom-2 bg-primaryOrange rounded-full p-3 w-12 h-12 text-white cursor-pointer text-center font-semibold hover:bg-white hover:text-primaryOrange hover:border-solid hover:border-2 hover:border-primaryOrange duration-75">
          <button>
            <RiSendPlaneFill className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
