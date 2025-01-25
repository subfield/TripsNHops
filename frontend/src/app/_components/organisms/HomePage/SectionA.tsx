import Image from "next/image";
import Section from "../../atoms/Section";
import { Img } from "@/assets/image";

const SectionA = () => {
  return (
    <Section padding="top" title="Why Choose TripsNHops">
      <div className="pt-5 lg:pt-10 grid grid-cols-4 lg:grid-cols-12 gap-4">
        <div className="flex flex-col items-start justify-center gap-3 col-span-2 lg:col-span-3 ">
          <Image
            src={Img.Ticket}
            alt="feature one"
            width={450}
            height={600}
            className="w-1/5 h-1/5 object-fill mb-5"
          />
          <h3 className="font-semibold text-xl">Ultimate flexibility</h3>
          <p className="line-clamp-4">
            Deserunt quaerat sed ea cupiditate rerum quia minus. Sunt error sunt
            nam maiores voluptate quo reiciendis in. Quidem hic ut eligendi
            laudantium quis ab.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 col-span-2 lg:col-span-3 ">
          <Image
            src={Img.HotBalloon}
            alt="feature one"
            width={450}
            height={600}
            className="w-1/5 h-1/5 object-fill mb-5"
          />
          <h3 className="font-semibold text-xl">Memorable experiences</h3>
          <p className="line-clamp-4">
            Deserunt quaerat sed ea cupiditate rerum quia minus. Sunt error sunt
            nam maiores voluptate quo reiciendis in. Quidem hic ut eligendi
            laudantium quis ab.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 col-span-2 lg:col-span-3 ">
          <Image
            src={Img.Diamond}
            alt="feature one"
            width={450}
            height={600}
            className="w-1/5 h-1/5 object-fill mb-5"
          />
          <h3 className="font-semibold text-xl">Quality at our core</h3>
          <p className="line-clamp-4">
            Deserunt quaerat sed ea cupiditate rerum quia minus. Sunt error sunt
            nam maiores voluptate quo reiciendis in. Quidem hic ut eligendi
            laudantium quis ab.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 col-span-2 lg:col-span-3 ">
          <Image
            src={Img.Medal}
            alt="feature one"
            width={450}
            height={600}
            className="w-1/5 h-1/5 object-fill mb-5"
          />
          <h3 className="font-semibold text-xl">Award-winning support</h3>
          <p className="line-clamp-4">
            Deserunt quaerat sed ea cupiditate rerum quia minus. Sunt error sunt
            nam maiores voluptate quo reiciendis in. Quidem hic ut eligendi
            laudantium quis ab.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default SectionA;
