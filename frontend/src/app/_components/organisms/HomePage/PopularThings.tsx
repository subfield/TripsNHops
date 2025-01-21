"use client"

import Link from "next/link"
import Section from "../../atoms/Section"
import Image from "next/image"
import { Img } from "@/assets/image"
import useDeviceSize from "@/hooks/useMediaQuery"

const data = [
  {
    sm: {
      col: 6,
    },
    lg: {
      col: 4,
    row: 2,
    },
    src: Img.ptOne,
    title: "Cruises",
    link: "#",
  },
  {
    sm: {
      col: 6,
    },
    lg: {
      col: 3,
      row: 0,
    },
    src: Img.ptTwo,
    title: "Beach Tours",
    link: "#",
  },
  {
    sm: {
      col: 6,
    },
    lg: {
      col: 4,
      row: 0,
    },
    src: Img.ptThree,
    title: "City Tours",
    link: "#",
  },
  {
    sm: {
      col: 6,
    },
    lg: {
      col: 3,
      row: 0,
    },
    src: Img.ptFour,
    title: "Museum Tour",
    link: "#",
  },
  {
    sm: {
      col: 3,
    },
    lg: {
      col: 2,
      row: 0,
    },
    src: Img.ptFive,
    title: "Food",
    link: "#",
  },
  {
    sm: {
      col: 3,
    },
    lg: {
      col: 2,
      row: 0,
    },
    src: Img.ptSix,
    title: "Hiking",
    link: "#",
  }
]

const PopularThings = () => {
  const size = useDeviceSize()
  return <Section title="Popular things to do" padding="top-bottom">
    <div className="pt-5 lg:pt-10">
      <div className="grid grid-cols-6 lg:grid-cols-12 grid-rows-1 lg:grid-rows-2 gap-2 lg:gap-5 h-auto lg:h-[480px]">
        {
          data.map((item, index) => (
            <Link href={item.link} key={index} className={`relative -tnp-feature col-span-${size === 'sm' ? item.sm.col : item.lg.col} ${size === "lg" ? `row-span-${item.lg.row}` : ""} z-0 rounded-xl overflow-hidden ${index === 0 ? "col-start-1 col-end-4 lg:col-end-5 row-start-1 row-end-2 lg:row-end-3" : index === 1 ? "col-start-4 lg:col-start-5 col-end-7 lg:col-end-8" : index === 2 ? "col-start-1 lg:col-start-8 col-end-7 lg:col-end-13" : index === 3 ? "col-start-1 lg:col-start-5 col-end-7 lg:col-end-8" : index === 4 ? "col-start-1 lg:col-start-8 col-end-4 lg:col-end-10" : "col-start-4 col-end-7 lg:col-start-10 lg:col-end-13"} h-[200px] lg:h-auto`}>
              <div className="h-full w-full overflow-hidden">
                <Image src={item.src} alt={`popular thing - ${item.title}`} loading="lazy" width={780} height={780} className="w-full h-full object-cover transition duration-700 hover:scale-[1.15] rounded-xl" style={{ color: "transparent" }} />
              </div>
              <div className="absolute bottom-5 left-5 z-20">
                <h4 className="text-white font-medium text-xl">{item.title}</h4>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  </Section>
}

export default PopularThings