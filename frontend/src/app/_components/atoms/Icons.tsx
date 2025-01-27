import {
  CalendarCheck2,
  ChevronDown,
  Clock4,
  Flag,
  Headset,
  Heart,
  Mail,
  MapPin,
  Menu,
  Search,
  Send,
  SquareArrowOutUpRight,
  Star,
  StarHalf,
  User,
} from "lucide-react";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
} from "react-icons/ri";
import { ImAndroid, ImAppleinc } from "react-icons/im";
import * as T from "@/types";

export const DownIcon: React.FC<T.IconProps> = ({ className }) => {
  return <ChevronDown className={className} />;
};

export const MenuIcon: React.FC<T.IconProps> = ({ className }) => {
  return <Menu className={className} />;
};

export const SearchIcon: React.FC<T.IconProps> = ({ className }) => {
  return <Search className={className} />;
};

export const UserIcon: React.FC<T.IconProps> = ({ className }) => {
  return <User className={className} />;
};

export const LocationIcon: React.FC<T.IconProps> = ({ className }) => {
  return <MapPin className={className} />;
};

export const CalendarCheck2Icon: React.FC<T.IconProps> = ({ className }) => {
  return <CalendarCheck2 className={className} />;
};

export const FlagIcon: React.FC<T.IconProps> = ({ className }) => {
  return <Flag className={className} />;
};

export const OpenLinkIcon: React.FC<T.IconProps> = ({ className }) => {
  return <SquareArrowOutUpRight className={className} />;
};

export const SupportIcon: React.FC<T.IconProps> = ({ className }) => {
  return <Headset className={className} />;
};

export const MailIcon: React.FC<T.IconProps> = ({ className }) => {
  return <Mail className={className} />;
};

export const SendIcon: React.FC<T.IconProps> = ({ className }) => {
  return <Send className={className} />;
};

export const HeartIcon: React.FC<T.IconProps> = ({ className }) => {
  return <Heart className={className} />;
};

export const StarIcon: React.FC<T.IconProps> = ({ className }) => {
  return <Star className={className} />;
};

export const StarHalfIcon: React.FC<T.IconProps> = ({ className }) => {
  return <StarHalf className={className} />;
};

export const Clock4Icon: React.FC<T.IconProps> = ({ className }) => {
  return <Clock4 className={className} />;
};

// Social Icons
export const FbIcon: React.FC<T.IconProps> = ({ className }) => {
  return <RiFacebookFill className={className} />;
};

export const IgIcon: React.FC<T.IconProps> = ({ className }) => {
  return <RiInstagramLine className={className} />;
};

export const XIcon: React.FC<T.IconProps> = ({ className }) => {
  return <RiTwitterXFill className={className} />;
};

export const IOSIcon: React.FC<T.IconProps> = ({ className }) => {
  return <ImAppleinc className={className} />;
};
export const AndroidIcon: React.FC<T.IconProps> = ({ className }) => {
  return <ImAndroid className={className} />;
};
