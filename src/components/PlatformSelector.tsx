import { Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../hooks/usePlatform";
import Platform from './Platforms';

interface Props {
    selectedPlatform: Platform | null
    onSelectPlatform: (platform: Platform | null) => void
}

function PlatformSelector({onSelectPlatform, selectedPlatform}: Props){
    const {data:platforms} = usePlatform()
    return (
        <Menu>
            <MenuButton as={Button} backgroundColor='green.300' marginBottom={3} leftIcon={<FaChevronDown />}>
                {selectedPlatform == null ? "All Platforms" : selectedPlatform.name}
            </MenuButton>
            <MenuList>
                {selectedPlatform != null && <MenuItem onClick={() => onSelectPlatform(null)}>All Platforms</MenuItem>}
                {platforms?.map(platform => platform.id != selectedPlatform?.id && <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector