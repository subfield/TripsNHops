import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";


export interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
  label?: string;
  required?: boolean;
  icon?: LucideIcon;
  onIconClick?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface IconProps {
  className?: string;
}

export interface SocialIconProps extends IconProps {
  fgColor?: string;
  bgColor?: string;
}

export interface TitleLinkProps {
  id: number;
  title: string;
  href?: string;
}

export interface NavSubNavProps {
  id: number;
  title: string;
  subNavs: subNavProps[];
}

export interface NavProps {
  menu: MenuProps[];
}

export interface MenuProps {
  title: string;
  href?: string;
  hasSubNav?: boolean;
  subNav?: subNavProps[];
  isMegaMenu?: boolean;
  megaMenu?: megaNavProps[];
}

export interface subNavProps {
  title: string;
  href: string;
  hasSubNav?: boolean;
  subNav?: subNavProps[];
}

export interface megaNavProps {
  title: string;
  menu: subNavProps[];
}

export interface SectionProps {
  padding?: "top" | "top-bottom" | "none";
  bg?: "dark" | "light" | "neutral";
  title?: string;
  link?: string;
  children: React.ReactNode;
  className?: string;
}

export interface ProductCardProps {
  title: string;
  price: string;
  location: string;
  link: string;
  isFav: boolean;
  days: number;
  img: StaticImageData;
  review: {
    reviews: number;
    stars: number;
  };
}

export interface HeaderProps extends Pick<ProductCardProps, "img" | "isFav"> {}

export interface FooterProps extends Pick<ProductCardProps, "title" | "price" | "location" | "days" | "review"> { }

export interface LikeBtnProps extends Pick<HeaderProps, "isFav"> {}