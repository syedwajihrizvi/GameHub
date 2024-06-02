import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import CardSkeleton from "./CardSkeleton"

function GameGrid() {
    const {games, error, loading} = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]
    return ( 
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 3}} spacing='20px' padding={5}>
            {error && <Text>{error}</Text>}
            {loading && skeletons.map((skeleton) => <CardSkeleton key={skeleton}/>)}
            {games.map(game => <GameCard key={game.id} game={game}/>
            )}
        </SimpleGrid>
    )
}

export default GameGrid