import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaApple, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

export function LoginForm() {
  return (
    <div className="bg-white w-[410px] p-6 rounded-md  flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Sign in</h2>
      <form className="flex flex-col gap-8">
        <Input type="email" placeholder="Enter Email" />
        <Input type="password" placeholder="Password" />
        <div className=" text-end">
          <Link href={""} className="text-main text-base  ">
            Recover Password ?
          </Link>
        </div>
        <Button className="w-full rounded-2xl h-14 text-lg ">Sign in</Button>
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
