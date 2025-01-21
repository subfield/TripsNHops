import * as T from "@/types"
import Link from "next/link"
import { OpenLinkIcon } from "./Icons"

const Section: React.FC<T.SectionProps> = ({ padding = "none", bg = "plain", title = "", link = "", children, className = "" }) => {
    return (
        <section className={`section ${className} ${padding === "top-bottom" ? "py-[50px] lg:py-[120px]" : padding === "top" ? "pt-[50px] lg:pt-[120px]" : ""} ${bg === "dark" ? "bg-[#05073c]" : bg === "light" ? "bg-primary-50" : ""}`}>
            <div>
            {title !== "" ? (
                <div className="flex items-center justify-between -my-[5px] devContainer">
                        <h2 className={`${bg === 'light' || bg === "plain" ? "text-black" : "text-white"} text-[24px] md:text-[30px] font-bold`}>{title}</h2>
                        <Link href={link} className={`${bg === 'light' || bg === "plain" ? "text-black" : "text-white"} flex items-center gap-2 ${bg === 'light' || bg === "plain" ? "hover:text-secondary-800" : "hover:text-primary-400"}`}>See all <OpenLinkIcon className="w-4 h-4" /></Link>
                </div>
            ) : ("")}
            {children}
            </div>
        </section>
    )
}

export default Section