import Container from "../Container";
import { SvgIcon } from "@mui/material";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi"
import { MdOutlineVilla } from "@mui/icons-material";
import { FaSkiing } from "@mui/icons-material";
import { BsSnow } from "@mui/icons-material";
import { IoDiamond } from "@mui/icons-material";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: "Beach",
        icon: () => <SvgIcon component={GiWindmill} />,
        description: "This property is close to the beach!",
    },
    {
        label: "Windmills",
        icon: () => <SvgIcon component={GiWindmill} />,
        description: "This property has windmills!",
    },
    {
        label: "Modern",
        icon: () => <MdOutlineVilla />,
        description: "This property is modern!",
    },
    {
        label: "Countryside",
        icon: () => <SvgIcon component={GiWindmill} />,
        description: "This property is in the countryside!",
    },
    {
        label: "Pools",
        icon: () => <SvgIcon component={GiWindmill} />,
        description: "This property has a pool!",
    },
    {
        label: "Islands",
        icon: () => <SvgIcon component={GiWindmill} />,
        description: "This property is on an island!",
    },
    {
        label: "Lake",
        icon: () => <SvgIcon component={GiWindmill} />,
        description: "This property is close to a Lake!",
    },
    {
        label: "Skiing",
        icon: () => <FaSkiing />,
        description: "This property has skiing activities!",
    },
    {
        label: "Castles",
        icon: () => <SvgIcon component={GiWindmill} />,
        description: "This property is in a casles!",
    },
    {
        label: "Camping",
        icon: () => <SvgIcon component={GiWindmill} />,
        description: "This property has camping activities!",
    },
    {
        label: "Arctic",
        icon: () => <BsSnow />,
        description: "This property has camping activities!!",
    },
    {
        label: "Cave",
        icon: () => <SvgIcon component={GiWindmill} />,
        description: "This property is in a cave!",
    },
    {
        label: "Desert",
        icon: () => <GiCactus />,
        description: "This property is in the desert!",
    },
    {
        label: "Barns",
        icon: () => <GiBarn />,
        description: "This property is in the barn!",
    },
    {
        label: "Lux",
        icon: () => <IoDiamond />,
        description: "This property is luxurious!",
    },
];

const Categories = () => {
    const params = useSearchParams();

    const category = params?.get("category");

    const pathname = usePathname();

    const isMainPage = pathname === "/";

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon()}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Categories;
