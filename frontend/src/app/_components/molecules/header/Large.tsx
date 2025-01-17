import { SearchIcon } from "lucide-react"
import Input from "../../atoms/Input"
import Nav from "./Nav"
import Button from "../../atoms/Button"

const HeaderLarge = () => {
  return (
      <div className="hidden lg:flex items-center gap-5 space-x-5">
          <h1 className="text-primary font-bold text-2xl">Trips n Hops</h1>
          <div className="flex items-center justify-between gap-5 ">
              <Input
                  type="search"
                  placeholder="Search destinations or activities"
                  icon={SearchIcon}
              />
              <div className="mx-5">
              <Nav menu={[
                  {
                      title: "About",
                      href: "/about",
                  },
                  {
                      title: "Contact",
                      href: "/contact",
                  },
                  {
                      title: "Explore",
                      hasSubNav: !!1,
                      subNav: [
                          {
                              title: "Destinations",
                              href: "/explore/destinations",
                          },
                          {
                              title: "Activities",
                              href: "/explore/activities",
                          },
                          {
                              title: "Trips",
                              href: "/explore/trips",
                          },
                      ],
                  },
              ]} />
          </div>
          </div>
          <div className="flex items-center justify-between ow-full">
              <Nav menu={[
                  {
                      title: "ETH",
                      hasSubNav: !!1,
                      subNav: [
                          {
                              title: "ETH",
                              href: "/explore/destinations",
                          },
                          {
                              title: "BNB",
                              href: "/explore/activities",
                          }
                      ],
                  },
              ]} />
              <Button>Login</Button>
          </div>
      </div>
  )
}

export default HeaderLarge