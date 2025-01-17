import HeaderLarge from "./Large"
import Mobile from "./Mobile"

const HeaderIndex = () => {
    return (
        <div className="container mx-auto px-1 w-full flex items-center justify-center h-[57px] lg:h-[88px]">
            <HeaderLarge />
            <Mobile />
        </div>
    )
}

export default HeaderIndex