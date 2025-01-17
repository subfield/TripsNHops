import * as T from "@/types"
import * as L from "@/app/_libs"
import Link from "next/link"
import { SubNav, MegaMenu } from "./Menu";

export const isActive = L.S<boolean>(!!0);


const Nav: React.FC<T.NavProps> = ({ menu }) => {
    return (
        <div className="flex items-center">
            {menu.map((item, index) => (
                <div key={`menu${index}`} className="transition-all duration-200 py-2 px-5 relative rounded-full hover:bg-soft cursor-pointer">
                    {item.hasSubNav ? <SubNav id={index + 1} title={item.title} subNavs={item.subNav || []} /> :
                        item.isMegaMenu ? <MegaMenu /> :
                            <LinkTitle id={index + 1} title={item.title} href={item.href || ""} />
                    }
                </div>
            ))}
        </div>
    )
}

export default Nav

const LinkTitle: React.FC<T.TitleLinkProps> = ({ id, title, href = "" }) => {

    return (
        <Link href={href} className={`${isActive.value ? "text-primary-500" : "text-gray-500"} transition-all duration-200 hover:text-primary-500 flex items-center justify-center w-full`}>
            {title}
        </Link>

    )
}

