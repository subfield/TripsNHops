import { UserIcon } from "lucide-react";
import { MenuIcon, SearchIcon } from "../../atoms/Icons";

const Mobile = () => {
  return (
    <div className="container mx-auto flex justify-between px-3 items-center lg:hidden">
      <MobileLeft />
      <h3>Trips n Hops</h3>
      <MobileRight />
    </div>
  );
};

export default Mobile;

const MobileLeft = () => {
  return (
    <div className="flex">
      <MenuIcon className="h-7 w-7" />
    </div>
  );
};

const MobileRight = () => {
  return (
    <div className="flex gap-5 items-center">
      <SearchIcon className="h-7 w-7" />
      <UserIcon className="h-7 w-7" />
    </div>
  );
};
