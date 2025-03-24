import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import SocialLinks from "../../_components/SocialLinks";

export function LoginForm() {
  return (
    <div className="bg-white w-[500px]  rounded-md  flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Sign in</h2>
      <form className="flex flex-col gap-8">
        <Input type="email" placeholder="Enter Email" />
        <Input type="password" placeholder="Password" />
        <div className=" text-end">
          <Link href={"/forget-password"} className="text-main text-base  ">
            Recover Password ?
          </Link>
        </div>
        <Button className="w-full rounded-2xl h-14 text-lg ">Sign in</Button>
      </form>
      <SocialLinks />
    </div>
  );
}
