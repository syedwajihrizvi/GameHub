import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

export interface Sorter {
    name: string
    queryString: string
}

interface Props {
    selectedSorters: string[]
    onSelectSorter: (sorter: Sorter) => void
}

const sorters = [
    {name: "Rating", queryString: "rating"},
    {name: "Metacritic", queryString: "metacritic"},
    {name: "Name", queryString: "name"},
    {name: "Date Released", queryString: "released"},
    {name: "Date Added", queryString: "added"},
    {name: "Date Updated", queryString: "updated"}
]

function SortSelector({selectedSorters, onSelectSorter}: Props) {

    const setSorterColor = (sorterQuery: string) => {
        let colorValue = ''
        if (selectedSorters != null)
            selectedSorters.forEach(sorter => {
                if (sorter.includes(sorterQuery))
                    colorValue = sorter.includes('-') ? 'green.300' : 'red.300'
            });
        return colorValue
    }

    return (
        <Menu>
            <MenuButton as={Button} backgroundColor='green.300' marginBottom={3} leftIcon={<FaChevronDown />}>
                Filters
            </MenuButton>
            <MenuList>
                {sorters.map(sorter => <MenuItem key={sorter.name} backgroundColor={setSorterColor(sorter.queryString)} onClick={() => onSelectSorter(sorter)}>{sorter.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector