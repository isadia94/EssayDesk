import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  MenuIcon,
  UserAddIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import { subjects } from "../data/subjects";
import Header from "../components/Header";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <Head>
        <title>EssayDesk</title>
        <meta name="description" content="Online writing site" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Noto+Serif+Display:wght@600;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      {isActive ? (
        <div className="h-screen w-screen bg-gray-300">
          <Header
            isActive={isActive}
            setIsActive={setIsActive}
            handleClick={handleClick}
          />
          <div className="flex flex-col text-[25px] p-6 justify-between h-[450px] font-light">
            <Link href="/">
              <a
                className="hover:text-red-500  border-b-2 border-red-300 pb-6 outline-none"
                onClick={handleClick}
              >
                Home
              </a>
            </Link>
            <Link href="/">
              <a
                className=" hover:text-red-500 border-b-2 border-red-300 pb-6"
                onClick={handleClick}
              >
                Documents
              </a>
            </Link>
            <Link href="/">
              <a
                className="hover:text-red-500 border-b-2 border-red-300 pb-6"
                onClick={handleClick}
              >
                Join Our Tutors
              </a>
            </Link>
            <Link href="/login">
              <a
                className=" hover:text-red-500 border-b-2 border-red-300 pb-6"
                onClick={handleClick}
              >
                Login
              </a>
            </Link>
            <Link href="/register">
              <a className="hover:text-red-300 " onClick={handleClick}>
                Register
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <Header
            isActive={isActive}
            setIsActive={setIsActive}
            handleClick={handleClick}
          />
          <main className="mt-2">
            <div>
              <div className="relative">
                <div className=" h-[500px]">
                  <Image
                    src="/hero-image.jpg"
                    alt="hero"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-red-400 opacity-50"></div>
                <div className="absolute top-[150px] pl-6 z-10 flex flex-col space ">
                  <h1 className=" text-3xl lg:text-[45px] lg:leading-[3.7rem] font-bold text-white  max-w-[300px] lg:max-w-[500px] ">
                    Get Your Essay done by top professionals
                  </h1>
                  <Link href="/">
                    <a className="mt-4 lg:mt-8 text-xl font-bold bg-blue-500 py-4 px-2 rounded-full flex items-center justify-center max-w-[200px] text-white">
                      Post a Question
                    </a>
                  </Link>
                  <p className="text-xl text-white mt-4 ml-16">Or</p>
                  <Link href="/">
                    <a className="text-xl ml-2 mt-3">Obtain Study Documents</a>
                  </Link>
                </div>
              </div>
              <div className="mt-12 lg:mb-24 text-center ">
                <h2 className="font-bold text-gray-500 text-3xl">
                  How it Works
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 lg:space-y-0">
                  <div className="flex flex-col items-center max-w-[300px] justify-center mx-auto">
                    <UserAddIcon className="h-12 text-red-500" />
                    <p className="">Register an Account</p>
                  </div>
                  <div className="flex flex-col items-center max-w-[300px] justify-center mx-auto">
                    <QuestionMarkCircleIcon className="h-12 text-red-500" />
                    <p className="">Post any question you need help with.</p>
                  </div>
                  <div className="flex flex-col items-center max-w-[300px] justify-center mx-auto">
                    <UserGroupIcon className="h-12 text-red-500" />
                    <p className="">
                      Get high quality answers from our top tutors
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center ">
                <h1 className="font-bold text-gray-500 text-3xl">
                  Topics we cover
                </h1>
              </div>
              <div className="">
                <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 pl-6 mb-6">
                  {subjects.map((subject) => (
                    <div className="mb-1">
                      <p>{subject.name}</p>
                    </div>
                  ))}
                </div>
                <div className="h-[0.6px] w-full bg-red-400" />
              </div>
              <div className="h-[200px] py-12 bg-gray-500 text-white text-center mx-auto">
                <div className="flex flex-col lg:flex-row max-w-[700px] mx-auto space-y-3 lg:space-y-0">
                  <div>
                    <Link href="/">
                      <a>How it Works |</a>
                    </Link>
                    <Link href="/">
                      <a> Register an account |</a>
                    </Link>
                    <Link href="/">
                      <a> Blog |</a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/">
                      <a> Terms of Service |</a>
                    </Link>
                    <Link href="/">
                      <a> Become a Tutor |</a>
                    </Link>
                    <Link href="/">
                      <a> Tags</a>
                    </Link>
                  </div>
                </div>
                <div className="mt-12 flex flex-col">
                  <p className="text-xs mb-8">
                    Copyright &copy; 2022. EssayDesk{" "}
                  </p>
                  <p className="text-xs">
                    EssayDesk is not affiliated with any Institution
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
