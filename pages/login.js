import Head from "next/head";
import Header from "../components/Header";
import { AtSymbolIcon, UserIcon, KeyIcon } from "@heroicons/react/outline";
import Link from "next/link";

function register() {
  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>Login</title>
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
          <img src="/login.svg" alt="" className="lg:h-[300px] w-[600px]" />
        </div>
        <div className="mt-2 w-[384px]">
          <h1 className="text-3xl font-extrabold">Login</h1>
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
              <KeyIcon className="h-8 text-gray-400" />
              <input
                type="password"
                className="border-b-[0.6px] outline-none bg-transparent border-gray-400 w-full underline-none pl-3"
                placeholder="Password"
              />
            </div>
            <Link href="/forgot">
              <a className="text-right text-blue-500 text-sm">
                Forgot Password ?
              </a>
            </Link>

            <button className="bg-blue-500 text-white px-2 py-4 rounded-lg font-semibold">
              Login
            </button>
          </form>
          <p className="text-center mt-4">
            New to Essay Desk?{" "}
            <span className="text-blue-500">
              <Link href="/register">
                <a>Register</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default register;
