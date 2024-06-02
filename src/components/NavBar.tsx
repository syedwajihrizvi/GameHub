import { HStack, Image} from "@chakra-ui/react"
import logo from '../assets/logo.webp'

function NavBar() {
    return (
        <HStack>
            <Image boxSize='75px' src={logo} alt="Logo"/> 
            <p>Search Bar</p>
        </HStack>
    )
}

export default NavBar