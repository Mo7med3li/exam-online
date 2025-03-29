import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import SocialLinks from "../../_components/SocialLinks";
import Link from "next/link";

export default function VerfyCodeForm() {
  return (
    <div className="bg-white w-[500px]  rounded-md  flex flex-col gap-12 py-10">
      <h2 className="text-2xl font-bold">Verfiy Code</h2>
      <form className="flex flex-col gap-8">
        <Input type="text" placeholder="Enter Code" />

        <Button className="w-full rounded-2xl h-14 text-lg ">Verfiy</Button>
        <div className=" text-end">
          <p className=" text-base">
            Didn’t receive a code?
            <Link className="text-main text-base px-1" href={""}>
              Resend
            </Link>
          </p>
        </div>
      </form>
      <SocialLinks />
    </div>
  );
}
