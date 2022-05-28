import Head from "next/head";
import Header from "../components/Header";
import { AtSymbolIcon, UserIcon, KeyIcon } from "@heroicons/react/outline";
import Link from "next/link";

function register() {
  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>Register</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Noto+Serif+Display:wght@600;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <div className="px-6 lg:grid grid-cols-2 place-items-center h-screen lg:-mt-[50px]">
        <div>
          <img src="/register.svg" alt="" className="lg:h-[300px] w-[600px]" />
        </div>
        <div className="mt-2">
          <h1 className="text-3xl font-extrabold">Sign Up</h1>
          <form className="mt-6 flex flex-col space-y-7">
            <div className="flex space-x-2">
              <AtSymbolIcon className="h-8 text-gray-400" />
              <input
                type="text"
                className="border-b-[0.6px] outline-none bg-transparent border-gray-400 w-full underline-none pl-3"
                placeholder="E-mail"
              />
            </div>
            <div className="flex space-x-2">
              <UserIcon className="h-8 text-gray-400" />
              <input
                type="text"
                className="border-b-[0.6px] outline-none bg-transparent border-gray-400 w-full underline-none pl-3"
                placeholder="Full Name"
              />
            </div>
            <div className="flex space-x-2">
              <KeyIcon className="h-8 text-gray-400" />
              <input
                type="password"
                className="border-b-[0.6px] outline-none bg-transparent border-gray-400 w-full underline-none pl-3"
                placeholder="Password"
              />
            </div>
            <p className="text-sm leading-5">
              By signing up, you are agreeing to our{" "}
              <span className="text-blue-500">Terms & Conditions</span> and{" "}
              <span className="text-blue-500">Privacy Policy</span>
            </p>

            <button className="bg-blue-500 text-white px-2 py-4 rounded-lg font-semibold">
              Continue
            </button>
          </form>
          <p className="text-center mt-4">
            Joined us before?{" "}
            <span className="text-blue-500">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default register;
