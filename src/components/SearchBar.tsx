import { Button, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react"
import { Search2Icon, CloseIcon } from '@chakra-ui/icons'
import { useState } from "react"

interface Props {
    onEnter: (searchString: string) => void
}

function SearchBar({onEnter}: Props) {
    const [search, setSearch] = useState<string>('')
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == 'Enter')
            onEnter(search)
    }

    const handleClear= () => {
        setSearch('')
        onEnter(search)
    }

    return (
        <>
        <InputGroup>
            <InputLeftElement pointerEvents='none'>
                <Search2Icon color='gray.300' />
            </InputLeftElement>
            <Input borderRadius={20} value={search} placeholder="Search Games" onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => handleKeyDown(event)}/>
            {
            search && 
                <InputRightElement width='4.5rem'>
                    <Button background='none' h='1.75rem' size='sm' onClick={() => handleClear()}>
                        <CloseIcon color='red.300'/>
                    </Button>
                </InputRightElement>
            }
        </InputGroup>
        </>
    )
}

export default SearchBar