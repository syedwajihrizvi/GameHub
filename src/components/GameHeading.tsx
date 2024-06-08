import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery
}

function GameHeading({gameQuery: {genre, platform}}: Props) {
    return (
        <Heading marginBottom={3}>{platform?.name} {genre?.name} Games</Heading>
    )
}

export default GameHeading