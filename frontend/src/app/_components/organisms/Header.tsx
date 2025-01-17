"use client"
import { useEffect, useState } from "react";
import HeaderIndex from "../molecules/header/Index";

const Header = () => {
    const [scrolled, setScrolled] = useState(!!0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(!!1);
            } else {
                setScrolled(!!0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${scrolled ? 'bg-background-secondary shadow-[0_10px_20px_0_rgba(0,0,0,0.05)]' : ''} -tnp-header`}>
            <HeaderIndex />
        </header>
    )
}

export default Header