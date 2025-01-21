import Link from "next/link"
import Section from "../../atoms/Section"
import { Img } from "@/assets/image"
import Image from "next/image"
import { title } from "process"

const TrendData = [
  {
    title: 'Destination 1',
    subTitle: '100+',
    image: Img.td1,
    link: '/destinations'
  },
  {
    title: 'Destination 2',
    subTitle: '100+',
    image: Img.td2,
    link: '/destinations'
  },
  {
    title: 'Destination 3',
    subTitle: '100+',
    image: Img.td3,
    link: '/destinations'
  },
  {
    title: 'Destination 4',
    subTitle: '100+',
    image: Img.td4,
    link: '/destinations'
  }
]

const TrendingDestinations = () => {
  return <Section padding="top-bottom" bg="dark" title='Trending Destinations' link='/destinations'>
    <div className="text-white pt-5 lg:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
      {TrendData.map((item, index) => (<Link key={`${item.title}-${index}`} href={item.link} className="col-span-1 lg:col-span-3 relative -tnp-feature ">
        <Image src={item.image} alt="trending destination one" loading="lazy" width={460} height={600} className="rounded-xl w-full h-full z-[1] object-cover transition duration-700 hover:scale-[1.15]" />
        <div className="absolute bottom-5 left-5 z-[3] flex-x-y">
          <div className="">
            <h4 className="font-medium text-2xl">{item.title}</h4>
            <h3 className="font-medium text-lg">{item.subTitle}</h3>
          </div>
        </div>
      </Link>))}
    </div>
  </Section>
}

export default TrendingDestinations