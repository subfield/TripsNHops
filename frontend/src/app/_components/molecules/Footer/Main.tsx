import { Img } from "@/assets/image"
import Image from "next/image"
import { FbIcon, MailIcon, SupportIcon, IgIcon, XIcon, SendIcon, IOSIcon, AndroidIcon } from "../../atoms/Icons"
import { Button } from "@/components/ui/button"

const Main = () => {
    return (
        <div className="relative z-0">
            <div className="absolute left-0 right-0 md:left-[-20px] md:right-[-20px] -z-[1]">
                <Image src={Img.footerSvg} alt="footerSvg" width={1800} height={627} className="w-full h-full max-w-full align-middle object-cover" loading="lazy" style={{ color: "transparent" }} />
            </div>
            <div className="divContainer">
                <div className="py-[40px] md:pt-[80px] md:pb-[48lpx] border-b border-soft">
                    <div className="flex flex-col md:flex-row justify-between items-start lg:items-center -my-2.5">
                        <div className="py-[20px] px-2">
                            <div className="flex-x-y -my-2.5">
                                <div className="py-[20px] px-2">
                                    <SupportIcon className="w-10 h-10" />
                                </div>
                                <div className="py-[20px] px-2">
                                    <div className="text-[20px] font-medium">Speak to our expert at <br className="inline md:hidden" /> <span className="">1-800-453-6744</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-[20px] px-2">
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-1 items-start md:items-center">
                                <div className="mr-2.5 font-medium text-lg">Follow Us</div>
                                <div className="flex-x gap-3">
                                    <Button variant="outline" size="icon" className="!bg-transparent lg:!border-none flex-x-y rounded-full w-[40px] h-[40px] hover:!bg-primary-500 text-white transition-all duration-200">
                                        <MailIcon className="w-5 h-5" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="!bg-transparent lg:!border-none flex-x-y rounded-full w-[40px] h-[40px] hover:!bg-primary-500 text-white transition-all duration-200">
                                        <FbIcon className="w-5 h-5" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="!bg-transparent lg:!border-none flex-x-y rounded-full w-[40px] h-[40px] hover:!bg-primary-500 text-white transition-all duration-200">
                                        <IgIcon className="w-5 h-5" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="!bg-transparent lg:!border-none flex-x-y rounded-full w-[40px] h-[40px] hover:!bg-primary-500 text-white transition-all duration-200">
                                        <XIcon className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[40px] lg:pt-[60px]">
                    <div className="grid grid-cols-6 lg:grid-cols-12 -mt-[20px] gap-7 lg:gap-10">
                        <div className="col-span-6 lg:col-span-4 py-[20px]">
                            <h4 className="font-medium text-xl">Contact</h4>
                            <div className="mt-[20px] -mb-[5px]">
                                <a className="block py-[5px]" href="#">328 Queensberry Street, North Carolina 93051, United State.</a>
                                <a className="block py-[5px]" href="#">hi@tripsnhops.com</a>
                            </div>
                        </div>
                        <div className="col-span-3 lg:col-span-2 py-[20px]">
                            <h4 className="font-medium text-xl">Company</h4>
                            <div className="mt-[20px] -mb-[5px] space-y-5">
                                <a className="block font-medium" href="#">About Us</a>
                                <a className="block font-medium" href="#">Tourz Reviews</a>
                                <a className="block font-medium" href="#">Contact Us</a>
                                <a className="block font-medium" href="#">Travel Guides</a>
                                <a className="block font-medium" href="#">Data Policy</a>
                                <a className="block font-medium" href="#">Cookie Policy</a>
                                <a className="block font-medium" href="#">Legal</a>
                                <a className="block font-medium" href="#">Sitemap</a>
                            </div>
                        </div>
                        <div className="col-span-3 lg:col-span-2 py-[20px]">
                            <h4 className="font-medium text-xl">Support</h4>
                            <div className="mt-[20px] -mb-[5px] space-y-5">
                                <a className="block font-medium" href="#">Get in Touch</a>
                                <a className="block font-medium" href="#">Help Center</a>
                                <a className="block font-medium" href="#">Live Chat</a>
                                <a className="block font-medium" href="#">How we Work</a>
                            </div>
                        </div>
                        <div className="col-span-6 lg:col-span-3 py-[20px]">
                            <h4 className="font-medium text-xl">Newsletter</h4>
                            <p className="mt-[20px]">Subscribe to the free newsletter and stay up to date</p>
                            <div className="relative mt-2.5">
                                <input className="w-full h-[60px] px-[20px] text-black bg-white border border-[#e7e6e6] rounded-xl" type="Email" placeholder="Your email address" />
                                <button className="absolute top-1 right-1 bg-primary-500 w-14 h-[52px] flex-x-y rounded-xl"><SendIcon className="w-5 h-5 m-2" /></button>
                            </div>
                            <h4 className="font-medium text-xl mt-[30px]">Mobile Apps</h4>
                            <div className="mt-2.5">
                                <a className="flex-x" href="#">
                                    <IOSIcon className="w-4 h-4 mr-2.5" />
                                    iOS App</a>
                            <a className="flex-x mt-2.5" href="#">
                                <AndroidIcon className="w-4 h-4 mr-2.5" />
                                Android App</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main