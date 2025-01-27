import TrendingDestinations from "@/app/_components/organisms/HomePage/TrendingDestinations";
import SectionA from "@/app/_components/organisms/HomePage/SectionA";
import Hero from "@/app/_components/molecules/Hero";
import SpecialOffers from "@/app/_components/organisms/HomePage/SpecialOffers";
import PopularThings from "@/app/_components/organisms/HomePage/PopularThings";
import FeatureTrips from "@/app/_components/organisms/HomePage/FeatureTrips";

export default function Home() {
  return (
    <>
      <Hero/>
      <SpecialOffers/>
      <PopularThings/>
      <FeatureTrips/>
      <TrendingDestinations/>
      <SectionA/>
    </>
  );
}
