"use client";

import { Img } from "@/assets/image"
import Section from "../../atoms/Section"
import { ProductCard, ProductCardMobile } from "../../molecules/ProductCard/Index"
import { Fragment } from "react"
import { Carousel } from "@/components/ui/carousel"
import { CarouselContent } from "@/components/ui/carousel"
import { AP } from "@/app/_libs"

const cardData = [
    { title: "Centipede Tour - Guided Arizona Desert Tour by ATV", price: "754.27", location: "Corpus Christi, United Kingdom", link: "/black-mark", isFav: false, days: 2, img: Img.ft1, review: { reviews: 15954, stars: 1.9 } },
    { title: "Incredible Steel Keyboard - sunt aliquam dolore", price: "464.80", location: "East Noah, Democratic Republic", link: "/rich-scout", isFav: true, days: 6, img: Img.ft2, review: { reviews: 0, stars: 0 } },
    { title: "Handcrafted Metal Car - ea enim voluptatibus", price: "374.98", location: "Rennerside, France", link: "/better-brain", isFav: true, days: 6, img: Img.ft3, review: { reviews: 46985, stars: 2.8 } },
    { title: "Bespoke Granite Computer - repellendus dignissimos aliquamdd", price: "698.59", location: "Arielleville, Honduras", link: "/lumpy-arm", isFav: false, days: 6, img: Img.ft4, review: { reviews: 90256, stars: 2.2 } },
    { title: "Sleek Steel Shirt - impedit est nam", price: "959.30", location: "Abbottland, Norway", link: "/devoted-greens", isFav: false, days: 2, img: Img.ft5, review: { reviews: 82142, stars: 3.1 } },
    { title: "Tasty Bronze Chips - quidem quam voluptates", price: "636.69", location: "New Lucieside, Samoa", link: "/gruesome-carotene", isFav: false, days: 3, img: Img.ft6, review: { reviews: 7262, stars: 2.8 } },
    { title: "Electronic Rubber Pants - magni quod ullam", price: "766.80", location: "East Doyleside, Barbados", link: "/quizzical-till", isFav: true, days: 4, img: Img.ft7, review: { reviews: 42715, stars: 4.4 } },
    { title: "Tasty Soft Keyboard - dolorem velit non", price: "625.95", location: "Terenceville, Swaziland", link: "/idiotic-right", isFav: true, days: 5, img: Img.ft8, review: { reviews: 40215, stars: 2.3 } },
]

const FeatureTrips = () => {
    return <Section padding="top-bottom" bg="light" title='Featured Trips' link='/trips'>
        <div className="pt-5 lg:pt-10">
            <div className="hidden lg:grid grid-cols-6 lg:grid-cols-12 gap-3 lg:gap-6">
                {cardData.map((item, index) => (
                    <Fragment key={`${index}-${item.title}`}>
                        <ProductCard {...item} />
                    </Fragment>
                ))}
            </div>
            <Carousel className="w-full inline lg:hidden"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    AP({
                        delay: 2500,
                    }),
                ]}>
                <CarouselContent>
                    {cardData.map((item, index) => (
                        <Fragment key={`${index}-${item.title}-carousel`}>
                            <ProductCardMobile {...item} />
                        </Fragment>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    </Section >
}

export default FeatureTrips