import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { FaApple, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

export default function SignupForm() {
  return (
    <div className="bg-white w-[500px]  rounded-md flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Sign up</h2>
      <form className="flex flex-col gap-8  ">
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="email" placeholder="Email" />
        <Input type="Password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <div className=" text-center">
          <p className=" text-base">
            Already have an account?
            <Link className="text-main text-base px-1" href={"/login"}>
              Login
            </Link>
          </p>
        </div>
        <Button className="w-full rounded-2xl h-14 text-lg ">
          Create Account
        </Button>
      </form>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-base text-muted-foreground">
          Or continue with
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Link
          href={"https:google.com"}
          className="w-full bg-white flex shadow-md items-center justify-center rounded-2xl border   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-3xl"
        >
          <FaGoogle className="text-main" />
        </Link>
        <Link
          href={"https:x.com"}
          className="w-full bg-white flex shadow-md items-center justify-center rounded-2xl border  text-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-3xl"
        >
          <FaTwitter className="text-main" />
        </Link>
        <Link
          href={"https:facebook.com"}
          className="w-full bg-white shadow-md flex items-center justify-center rounded-2xl border  text-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-3xl"
        >
          <FaFacebook className=" text-3xl w-24" />
        </Link>
        <Link
          href={"https:apple.com"}
          className="w-full shadow-md  bg-white flex items-center justify-center rounded-2xl p-5 hover:text-gray-700 border  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-3xl"
        >
          <FaApple />
        </Link>
      </div>
    </div>
  );
}
