import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"

function GameGrid() {
    const {games, error} = useGames()
    return ( 
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing='20px' padding={5}>
            {error && <Text>{error}</Text>}
            {games.map(game => <GameCard key={game.id} game={game}/>)}
        </SimpleGrid>
    )
}

export default GameGrid