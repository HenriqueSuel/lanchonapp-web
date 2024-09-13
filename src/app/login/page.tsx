import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Logo from "../../assets/images/logo/logo.svg";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

const Login: React.FC = () => {
  return (
    <div className="h-screen bg-white flex bg-purple-50">

      <div className="m-auto rounded-sm sm:border border-stroke bg-white shadow-default sm:w-6/12  w-full">
        <div className="w-full  m-auto">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5 p-9 ">
            <div className="flex items-center">
              <Image src={Logo} alt="Logo" />
              <h1 className="ml-3 text-xl font-bold text-purple-600">
                LanchonApp
              </h1>
            </div>
            <form className="mt-9">
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="text-gray-500 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-600 focus-visible:shadow-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="6+ Characters, 1 Capital letter"
                    className="text-gray-500 w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-purple-600 focus-visible:shadow-none"
                  />
                </div>
              </div>

              <button className="bg-purple-600 w-full p-4 text-white font-bold">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
