'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
    const pathName = usePathname();
    
    const isTrue = pathName === href
    return (

        <Link href={href} className={`${isTrue ? " border-b-2 border-secondary":""}`}>
            {children}
        </Link>

    );
};

export default NavLink;