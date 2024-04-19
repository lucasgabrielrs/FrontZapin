import { RiSendPlaneFill } from "react-icons/ri";

export function Footer() {
  return (
    <div>
      <div className="absolute rounded-lg border-solid border-2 border-primaryOrange w-3/4 left-4 bottom-2 bg-fundoSendbox ">
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
    </div>
  );
}
