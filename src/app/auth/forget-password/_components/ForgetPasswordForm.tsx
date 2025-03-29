import React from "react";
import SocialLinks from "../../_components/SocialLinks";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ForgetPasswordForm() {
  return (
    <div className="bg-white w-[500px]  rounded-md  flex flex-col gap-12 py-10">
      <h2 className="text-2xl font-bold">Forget Your Password?</h2>
      <form className="flex flex-col gap-8">
        <Input type="email" placeholder="Enter Email" />

        <Button className="w-full rounded-2xl h-14 text-lg ">Send Code</Button>
      </form>
      <SocialLinks />
    </div>
  );
}
