import Image from "next/image"
import { StaticImageData } from "next/image"
import LikeButton from "./LikeButton"
import * as T from "@/types"

const Header = ({ img, isFav }: T.HeaderProps) => {
    return (
        <>
            <div className="z-0">
                <Image src={img} alt="ft1" width={421} height={301} className="w-full h-full object-cover " loading="lazy" />
            </div>
            <LikeButton isFav={isFav} />
        </>
    )
}

export default Header