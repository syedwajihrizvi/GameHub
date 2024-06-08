import { Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../hooks/usePlatform";
import Platform from './Platforms';

interface Props {
    selectedPlatform: Platform | null
    onSelectPlatform: (platform: Platform | null) => void
}

function PlatformSelector({onSelectPlatform, selectedPlatform}: Props){
    const {platforms} = usePlatform()
    return (
        <Menu>
            <MenuButton as={Button} backgroundColor='green.300' marginBottom={3} leftIcon={<FaChevronDown />}>
                {selectedPlatform == null ? "All Platforms" : selectedPlatform.name}
            </MenuButton>
            <MenuList>
                {selectedPlatform != null && <MenuItem onClick={() => onSelectPlatform(null)}>All Platforms</MenuItem>}
                {platforms.map(platform => platform.id != selectedPlatform?.id && <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
        // <Select width='300px' placeholder='All Platforms' marginBottom={3} backgroundColor='green.300' onChange={(event) => onSelectPlatform(parseInt(event.target.value))}>
        //     {platforms.map(platform => <option value={platform.id}>{platform.name}</option>)}
        // </Select>
    )
}

export default PlatformSelector