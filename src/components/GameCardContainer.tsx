import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    card: ReactNode
}

function GameCardContainer({card}: Props) {
    return <Box borderRadius={3} overflow="hidden">{card}</Box>
}

export default GameCardContainer