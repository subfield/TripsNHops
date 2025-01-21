"use client"

import { LocationIcon, StarIcon, StarHalfIcon, Clock4Icon } from "../../atoms/Icons"
import { Separator } from "@/components/ui/separator"
import useDeviceSize from "@/hooks/useMediaQuery"
import * as T from "@/types"
import { Fragment } from "react"

const Footer = ({ title, price, location, days, review }: T.FooterProps) => {
    const size = useDeviceSize()
    return (
        <>
            <div className="flex-x gap-1">
                <LocationIcon className="w-5 h-5" />
                <p className="line-clamp-none lg:line-clamp-1">{location}.</p>
            </div>
            <h3 className="mt-1.5 py-1 font-medium text-base w-full">
                <span className="-tnh-card-bg line-clamp-none lg:line-clamp-2">{title}</span>
            </h3>
            <div className="mt-1.5 py-1 flex-x">
                <div className="flex-x gap-1">
                    <Stars stars={review.stars} />
                </div>
                {review.stars !== 0 ? <div className="text-sm ml-2.5">{review.stars} ({review.reviews})</div> : ""}
            </div>
            <Separator className="my-4 border !border-soft" />
            <div className="flex-x-y-y">
                <div className="flex-x gap-1">
                    <Clock4Icon className="w-5 h-5" />
                    <p className="text-base">{days} days</p>
                </div>
                <div className="flex items-end">
                    <p className="text-sm px-1">From</p>
                    <h2>${price}</h2>
                </div>
            </div>
        </>
    )
}

export default Footer

const Stars = ({ stars }: { stars: number }) => {
    const s = String(stars).split('.')
    const s1 = Number(s[0])
    const s2 = Number(s[1])
    return (
        <>
            {stars === 0 ? <p className="text-sm italic text-gray-500">No reviews yet</p> :
                <div className="flex items-center">
                    {Array.from({ length: s1 }, (_, i) => <Fragment key={`star-${stars}-${i}`} ><StarIcon className="w-5 h-5 text-yellow-600" /></Fragment>)}
                    {s2 <= 5 ? <StarHalfIcon className="w-5 h-5 text-yellow-600" /> : <StarIcon className="w-5 h-5 text-yellow-600" />}
                </div>}
        </>
    )
}