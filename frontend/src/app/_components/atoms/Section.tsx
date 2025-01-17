import * as T from "@/types"
import Link from "next/link"
import { OpenLinkIcon } from "./Icons"

const Section: React.FC<T.SectionProps> = ({ padding = "top", bg = "plain", title = "", link = "", children, className }) => {
    return (
        <section className={`${className} ${padding ? "py-[120px]" : "pt-[120px]"} ${bg === "dark" ? "bg-[#05073c]" : bg === "light" ? "#fbfbfb" : ""}`}>
            <div className="container mx-auto px-1 md:px-4">
                {title !== "" ? (
                    <div className="flex items-end justify-between -my-[5px]">
                    <div className="my-[5px] flex-auto w-auto">
                        <h2 className="text-[24px] md:[30px]">{title}</h2>
                    </div>
                    <div className="my-[5px] flex-auto w-auto">
                        <Link href={link} className="flex items-center gap-2">See all <OpenLinkIcon className="w-4 h-4" /></Link>
                    </div>
                </div>
                ) : ("")}
                {children}
            </div>
        </section>
    )
}

export default Section