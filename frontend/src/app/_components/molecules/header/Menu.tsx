"use client";

import { useState } from "react";
import * as T from "@/types"
// import { DownIcon } from "../../atoms/Icons";
// import { isActive } from "./Nav";
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


export const SubNav = ({ id, title, subNavs }: T.NavSubNavProps) => {
    const [isOpen, setIsOpen] = useState(true);
    return <>
        <NavigationMenu defaultValue="open">
            <NavigationMenuList>
                <NavigationMenuItem defaultValue="open">
                    <NavigationMenuTrigger 
                        className="!transition-all !duration-100 !h-auto !bg-transparent !hover:bg-transparent !px-0 !py-0 !text-gray-500 !hover:text-primary-500 !focus:text-primary-500 !text-base !font-normal !flex !items-center !justify-center !w-full"
                    >
                        {title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent 
                        className="!absolute !border-none !bg-transparent !left-0 !pointer-events-none !transition-all !duration-200 !ease-in-out"
                    >
                        <div className="!rounded-lg !bg-background !shadow-lg !border !border-mecury !min-w-[260px] !py-5 !px-10 space-y-3">
                        {subNavs.map((item, index) => (
                            <div key={`menu${index}-${id}`} className="relative !text-gray-500">
                                <Link href={item.href} className="flex items-center justify-between w-full">{item.title}</Link>
                            </div>
                        ))}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    </>
}

export const MegaMenu = () => {
    return <></>
}



