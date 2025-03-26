"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import SocialLinks from "../../_components/SocialLinks";
import PasswordInput from "../../_components/PasswordInput";

export default function SetPasswordForm() {
  return (
    <div className="bg-white w-[500px]  rounded-md  flex flex-col gap-12 py-10">
      <h2 className="text-2xl font-bold">Set a password</h2>
      <form className="flex flex-col gap-8">
        <PasswordInput placeholder="Create Password" />

        <Button className="w-full rounded-2xl h-14 text-lg ">
          Save Password
        </Button>
      </form>
      <SocialLinks />
    </div>
  );
}
