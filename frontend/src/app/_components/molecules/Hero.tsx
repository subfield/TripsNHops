import Image from "next/image";
import { Img } from "@/assets/image/index";
import {
  LocationIcon,
  CalendarCheck2Icon,
  FlagIcon,
  SearchIcon,
} from "../atoms/Icons";

const Hero = () => {
  return (
    <div className="relative z-[5] pt-[120px] pb-[40px] sm:pd-[200px] md:pd-[400px] lg:pt-[134px] lg:pb-[472px]">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Image
          src={Img.hero}
          alt="heroImg"
          width={1920}
          height={860}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          {/* <h1 className="font-semibold text-[36px] leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 md:text-[50px] lg:text-[60px] lg:font-bold"> */}
          <h1 className="-tnh-hero__title">
            Life Is Adventure Make
            <br className="hidden md:block" />
            The Best Of It
          </h1>
          <div className="mt-[30px] lg:mt-[45px]">
            <div className="flex flex-col h-auto p-0 rounded-xl w-xl md:flex-row items-center justify-center md:p-[10px] md:h-[80px] md:rounded-full bg-background -tnh-shadow w-full">
              <div className="grid grid-col-1 md:grid-cols-3 w-full px-0 py-0 md:px-2.5 md:py-[5px] gap-0 md:gap-1 lg:gap-5 roundegd-xl">
                <div className="relative">
                  <div className="cursor-pointer flex items-center text-left p-[15px] md:p-0">
                    <div className="flex items-center justify-center shrink-0 w-[50px] h-[50px] rounded-full bg-primary-50">
                      <LocationIcon className="w-5 h-5" />
                    </div>
                    <div className="ml-2.5">
                      <h5 className="font-medium text-base">Where</h5>
                      <div className="text-sm text-[#717171]">
                        Search destinations
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative border-t border-mecury md:border-0">
                  <div className="cursor-pointer w-full flex items-center text-left p-[15px] md:p-0">
                    <div className="flex items-center justify-center shrink-0 w-[50px] h-[50px] rounded-full bg-primary-50">
                      <CalendarCheck2Icon className="w-5 h-5" />
                    </div>
                    <div className="ml-2.5">
                      <h5 className="font-medium text-base">Where</h5>
                      <div className="text-sm text-[#717171]">
                        January 05 ~ February 14
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative border-t border-mecury md:border-0">
                  <div className="cursor-pointer w-full flex items-center text-left p-[15px] md:p-0">
                    <div className="flex items-center justify-center shrink-0 w-[50px] h-[50px] rounded-full bg-primary-50">
                      <FlagIcon className="w-5 h-5" />
                    </div>
                    <div className="ml-2.5">
                      <h5 className="font-medium text-base">Tour Type</h5>
                      <div className="text-sm text-[#717171]">All tour</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0">
                <button className="h-[60px] w-[384px] md:w-[60px] rounded-b-xl bg-primary-400 px-[30px] md:px-5 lg:h-[60px] cursor-pointer md:rounded-full flex items-center justify-center text-white text-center text-[15px] font-medium leading-[28px] border border-transparent transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
                  <SearchIcon className="w-4 h-4 md:w-10 md:h-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
