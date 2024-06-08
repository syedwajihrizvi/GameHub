import { HStack, Icon} from "@chakra-ui/react"
import { FaPlaystation, FaXbox, FaLinux, FaWindows, FaApple, FaAndroid } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
interface Platform {
    id: number
    name: string
}

interface Props {
    platforms: Platform[]
}

const mapPlatform = (platform: Platform) => {
    if (platform.id == 1)
        return FaWindows
    if (platform.id == 2)
        return FaPlaystation
    if (platform.id == 3)
        return FaXbox
    if (platform.id == 7)
        return BsNintendoSwitch
    if (platform.id == 6)
        return FaLinux
    if (platform.id == 8)
        return FaAndroid
    return FaApple
}
function Platform({platforms}: Props) {
    platforms = platforms.filter(platform => platform.id != 4)
    return (
        <HStack>
            {platforms.map(platform => <Icon as={mapPlatform(platform)} boxSize={{sm: 6, base: 4, md: 3, lg: 3, xl: 4}} color='gray.500'/>)}
        </HStack>
    )
}

export default Platform