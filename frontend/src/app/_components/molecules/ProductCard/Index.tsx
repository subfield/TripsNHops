import Header from "./Header"
import Link from "next/link"
import Footer from "./Footer"
import * as T from "@/types"
import { CarouselItem } from "@/components/ui/carousel"

export const ProductCard = ({ title, price, location, link, isFav, days, img, review }: T.ProductCardProps) => {
    return (
        <Link href={link} className="col-span-6 lg:col-span-3 rounded-lg bg-white shadow-sm hover:shadow border border-soft transition duration-150 overflow-hidden block">
            <div className="relative">
                <Header img={img} isFav={isFav} />
            </div>
            <div className="px-5 py-3">
                <Footer title={title} price={price} location={location} days={days} review={review} />
            </div>
        </Link>
    )
}

export const ProductCardMobile = ({ title, price, location, link, isFav, days, img, review }: T.ProductCardProps) => {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Link href={link} className="col-span-6 lg:col-span-3 rounded-lg bg-white shadow-sm hover:shadow border border-soft transition duration-150 overflow-hidden block">
                <div className="relative">
                    <Header img={img} isFav={isFav} />
                </div>
                <div className="px-5 py-3">
                    <Footer title={title} price={price} location={location} days={days} review={review} />
                </div>
            </Link>
        </CarouselItem>
    )
}



