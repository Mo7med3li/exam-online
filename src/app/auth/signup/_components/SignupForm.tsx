"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import SocialLinks from "../../_components/SocialLinks";
import PasswordInput from "../../_components/PasswordInput";

export default function SignupForm() {
  return (
    <div className="bg-white w-[500px]  rounded-md flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Sign up</h2>
      <form className="flex flex-col gap-8  ">
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="email" placeholder="Email" />
        <PasswordInput placeholder="Password" />
        <PasswordInput placeholder="Confirm Password" />
        <div className=" text-center">
          <p className=" text-base">
            Already have an account?
            <Link className="text-main text-base px-1" href={"/auth/login"}>
              Login
            </Link>
          </p>
        </div>
        <Button className="w-full rounded-2xl h-14 text-lg ">
          Create Account
        </Button>
      </form>
      <SocialLinks />
    </div>
  );
}
