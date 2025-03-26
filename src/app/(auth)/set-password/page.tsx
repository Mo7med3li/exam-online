import React from "react";
import Welcome from "../_components/Welcome";
import NavbarAuth from "../_components/NavbarAuth";
import SetPasswordForm from "./_components/SetPasswordForm";

export default function page() {
  return (
    <main className="grid grid-cols-5  h-screen">
      <Welcome />
      <section className=" col-span-3  ">
        <div>
          <NavbarAuth />
        </div>
        <div className="  flex items-center justify-center  p-10  ">
          <SetPasswordForm />
        </div>
      </section>
    </main>
  );
}
