import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import { subjects } from "../data/subjects";

export default function Home() {
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
      </Head>

      <nav className="p-6 flex items-center justify-between">
        <logo>
          <Link href="/">
            <a className="text-3xl font-bold">EssayDesk</a>
          </Link>
        </logo>
        <MenuIcon className="h-6" />
      </nav>

      <main className="mt-2">
        <div>
          <div className="relative">
            <Image
              src="/hero-image.jpg"
              alt="hero"
              width={1200}
              height={1600}
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-red-400 opacity-50"></div>
            <div className="absolute top-[150px] pl-6 z-10 flex flex-col space ">
              <h1 className=" text-3xl font-bold text-white  max-w-[300px]">
                Get Your Essay done by top professionals
              </h1>
              <Link className=" " href="/">
                <a className="mt-4 text-xl font-bold bg-blue-500 py-4 px-2 rounded-full flex items-center justify-center max-w-[200px]">
                  Post a Question
                </a>
              </Link>
              <p className="text-xl text-white mt-4 ml-20">Or</p>
              <Link href="/">
                <a className="text-xl ml-5 mt-4">Order Answers</a>
              </Link>
            </div>
          </div>
          <div className="mt-12 text-center ">
            <h2 className="font-bold text-gray-500 text-3xl">How it Works</h2>
            <p className="mt-4 bg-gray-300 shadow-2xl mx-6 py-4">
              Register an Account
            </p>
            <p className="mt-4 bg-gray-300 shadow-2xl mx-6 py-4">
              Post any question you need help with.
            </p>
            <p className="mt-4 bg-gray-300 shadow-2xl mx-6 py-2">
              Get high quality answers from our top tutors
            </p>
          </div>

          <div className="mt-12 text-center ">
            <h1 className="font-bold text-gray-500 text-3xl">
              Topics we cover
            </h1>
          </div>
          <div className="">
            <div className="grid grid-cols-2 mt-8 pl-6 mb-6">
              {subjects.map((subject) => (
                <div className="mb-1">
                  <p>{subject.name}</p>
                </div>
              ))}
            </div>
            <div className="h-[0.6px] w-full bg-red-400" />
          </div>
          <div className="h-[300px] w-full py-12 px-6  bg-gray-500 text-white text-center">
            <div className="flex flex-col space-y-4">
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
              <p className="text-xs mb-8">Copyright &copy; 2022. EssayDesk </p>
              <p className="text-xs">
                EssayDesk is not affiliated with any Institution
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
