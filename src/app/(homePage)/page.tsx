import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions); // server side
  //* getSession client and server side
  //^ useSession client side return
  return <main>{session?.user.firstName}</main>;
}
