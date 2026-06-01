'use client'
import Link from "next/link";
import image from '@/assets/user.png'
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import ThemeToggle from "./ThemeToggle";
const NavbarPage = () => {

    const { data: session } = authClient.useSession();
    // const user = session?.user ;
    // console.log(session)

    return (
        <div className="container mx-auto flex justify-between items-center py-4">
            <div>
                <ThemeToggle></ThemeToggle>
            </div>
            <ul className="text-gray-400 flex  gap-5">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
                
            </ul>
            <div className="flex justify-between items-center gap-3">
                {/* <h2>hello, {user.name}</h2> */}
                <Image src={image} alt="user logo"></Image>
                <Link href="/login"> <button className="btn btn-secondary">Login</button></Link>
            </div>
        </div>
    );
};

export default NavbarPage;