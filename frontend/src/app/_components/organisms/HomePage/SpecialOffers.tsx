"use client"
import Image from "next/image"
import Section from "../../atoms/Section"
import { Img } from "@/assets/image"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { AP } from "@/app/_libs"

const SpecialOffers = () => {
    return <Section padding="top">
        <div className="divContainer">
            <Carousel className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    AP({
                        delay: 2000,
                    }),
                ]}>
                <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="!p-0">
                                <Card>
                                    <CardContent className="text-white w-full h-[200px] !p-0 relative z-0 -tnp-special">
                                        <div className="h-[200px] absolute top-0 left-0 w-full -z-[1] ">
                                            <Image src={index + 1 === 1 ? Img.ctaOne : index + 1 === 2 ? Img.ctaTwo : index + 1 === 3 ? Img.ctaThree : ""} alt="special offer one" loading="lazy" width={615} height={300} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col justify-center p-[30px] h-full absolute top-0 left-0 z-[2]">
                                            <div className="mb-[5px] font-bold text-base">Enjoy Upto</div>
                                            <h3 className="mb-[5px] font-bold text-2xl uppercase">60% off
                                            </h3>
                                            <div className="font-bold text-base">on Your Booking</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
            {/* <div className="flex flex-col lg:flex-row items-end justify-between -my-[5px]">
                <div className="-my-[10px] lg:-my-[15px] pt-5 lg:pt-10">
                    <div className="grid grid-cols-6 lg:grid-cols-12 w-full max-w-full gap-0 lg:gap-5">
                        <div className="col-span-6 lg:col-span-4 py-2.5 lg:py-[15px]">
                            <div className="text-white w-full h-[200px] z-0">
                                <div className="top-0 left-0 w-full h-full -z-[1] rounded-lg">
                                    <Image src={Img.ctaOne} alt="special offer one" loading="lazy" width={615} height={300} className="w-full h-full object-cover" />
                                </div>
                                <div className="specialCard__content">
                                    <div className="specialCard__subtitle">Enjoy Upto</div>
                                    <h3 className="specialCard__title">60 % OFF<br />
                                    </h3>
                                    <div className="specialCard__text">on Your Booking</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 lg:col-span-4 py-2.5 lg:py-[15px]">
                            <div className="text-white w-full h-[200px] z-0">
                                <div className="top-0 left-0 w-full h-full -z-[1] rounded-lg">
                                    <Image src={Img.ctaTwo} alt="special offer one" loading="lazy" width={615} height={300} className="w-full h-full object-cover" />
                                </div>
                                <div className="specialCard__content">
                                    <div className="specialCard__subtitle">Enjoy Upto</div>
                                    <h3 className="specialCard__title">60 % OFF<br />
                                    </h3>
                                    <div className="specialCard__text">on Your Booking</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 lg:col-span-4 py-2.5 lg:py-[15px]">
                            <div className="text-white w-full h-[200px] z-0">
                                <div className="top-0 left-0 w-full h-full -z-[1] rounded-lg">
                                    <Image src={Img.ctaThree} alt="special offer one" loading="lazy" width={615} height={300} className="w-full h-full object-cover" />
                                </div>
                                <div className="specialCard__content">
                                    <div className="specialCard__subtitle">Enjoy Upto</div>
                                    <h3 className="specialCard__title">60 % OFF<br />
                                    </h3>
                                    <div className="specialCard__text">on Your Booking</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </Section>
}

export default SpecialOffers