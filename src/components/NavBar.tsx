import { HStack, Image} from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorMode from "./ColorMode"

function NavBar() {
    return (
        <HStack justifyContent='space-between'>
            <Image boxSize='75px' src={logo} alt="Logo"/>
            <ColorMode/>
        </HStack>
    )
}

export default NavBar