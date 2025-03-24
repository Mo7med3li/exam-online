import React from "react";
import { LoginForm } from "./_components/LoginForm";
import Welcome from "../_components/Welcome";
import NavbarAuth from "../_components/NavbarAuth";

export default function page() {
  return (
    <main className="grid grid-cols-5  h-screen">
      <Welcome />
      <section className=" col-span-3  ">
        <div>
          <NavbarAuth />
        </div>
        <div className="  flex items-center justify-center  p-10  ">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
