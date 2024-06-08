import { HStack, Image} from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorMode from "./ColorMode"
import SearchBar from "./SearchBar"

interface Props {
    handleEnter: (search: string) => void
}

function NavBar({handleEnter}: Props) {
    return (
        <HStack justifyContent='space-between'>
            <Image boxSize='75px' src={logo} alt="Logo"/>
            <SearchBar onEnter={handleEnter}/>
            <ColorMode/>
        </HStack>
    )
}

export default NavBar