import { Text, Switch, useColorMode, HStack } from "@chakra-ui/react"

function ColorMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <HStack>
            <Switch isChecked={colorMode == 'dark'} colorScheme='green' id='color-mode' onChange={() => toggleColorMode()}/>
            <Text whiteSpace='nowrap' marginRight={2}>Dark Mode</Text>
        </HStack>
    )
}

export default ColorMode