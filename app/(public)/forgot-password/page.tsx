"use client";
import { useAppContext } from "@/contexts/context";

const ForgotPassword = () => {
  const { handleSendEmail } = useAppContext();

  const SendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleSendEmail();
  };

  return (
    <div className="bg-gradient-to-t from-blue-200 to-blue-400 py-8 px-4 mx-auto w-full h-screen text-center lg:py-16 z-10 relative">
      <h1 className="mb-4 mt-24 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
        Esqueçeu a sua senha?
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">
        Use o seu email cadastrado para recuperar a sua senha. Caso também não
        se lembre do seu email entre em contato com os administradores.
      </p>
      <form className="w-full max-w-md mx-auto" onSubmit={SendEmail}>
        <label
          htmlFor="default-email"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Email sign-up
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="email"
            id="default-email"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu email aqui..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
