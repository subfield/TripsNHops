"use client"

import { Button } from "@/components/ui/button"
import { HeartIcon } from "../../atoms/Icons"
import * as T from "@/types"

const LikeButton = ({isFav}: T.LikeBtnProps) => {
    return (
        <>
            <Button onClick={(e) => {
                e.preventDefault()
                alert("clicked")
            }
            } variant="outline" size="icon" className={`!border-none !absolute !-bottom-4 right-3 lg:!right-2.5 !flex-x-y !w-10 !h-10 lg:!w-9 lg:!h-9 !rounded-full !shadow !z-[2] transition duration-150 ${isFav ? "!bg-primary-500 !text-white" : "!bg-white !text-black hover:!bg-primary-500 hover:!text-white"}`}>
                <HeartIcon className="w-5 h-5" />
            </Button>
        </>
    )
}

export default LikeButton