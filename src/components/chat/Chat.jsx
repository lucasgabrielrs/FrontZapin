export function Chat() {
  return (
    <div className="flex flex-col justify-end px-0 pb-20 pt-10 grow">
      <div
        className="flex flex-col-reverse overflow-y-auto scroll px-6"
        style={{ maxHeight: "calc(100% - 40px)" }}
      >
        <div className="p-3 w-full max-w-72 text-base font-normal mb-4 leading-6 bg-primaryOrange text-black rounded-md rounded-bl-none self-start">
          <span className="block mb-4 font-bold">Zapin</span>
          Olá mundo!
        </div>
        
        <div className="p-3 w-full max-w-72 text-base font-normal mb-4 leading-6 bg-laranjinha text-black rounded-md rounded-br-none self-end">
          Hello world!
        </div>

        <div className="p-3 w-full max-w-72 text-base font-normal mb-4 leading-6 bg-laranjinha text-black rounded-md rounded-br-none self-end">
          Hello world!
        </div>
  
        <div className="p-3 w-full max-w-72 text-base font-normal mb-4 leading-6 bg-primaryOrange text-black rounded-md rounded-bl-none self-start">
          <span className="block mb-4 font-bold">Zapin</span>
          Olá mundo!
        </div>

        <div className="p-3 w-full max-w-72 text-base font-normal mb-4 leading-6 bg-primaryOrange text-black rounded-md rounded-bl-none self-start">
          <span className="block mb-4 font-bold">Zapin</span>
          Olá mundo!
        </div>

        <div className="p-3 w-full max-w-72 text-base font-normal mb-4 leading-6 bg-laranjinha text-black rounded-md rounded-br-none self-end">
          Hello world!
        </div>

        <div className="p-3 w-full max-w-72 text-base font-normal mb-4 leading-6 bg-primaryOrange text-black rounded-md rounded-bl-none self-start">
          <span className="block mb-4 font-bold">Zapin</span>
          Olá mundo!
        </div>
      </div>
  
    </div>
  );
}
