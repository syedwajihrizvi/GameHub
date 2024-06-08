import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import CardSkeleton from "./CardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { GameQuery } from "../App"

interface Props {
    gameQuery: GameQuery
}

function GameGrid({gameQuery}: Props) {
    const {games, error, loading} = useGames(gameQuery)

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <SimpleGrid columns={{sm: 1, md: 3, lg: 4, xl: 4}} spacing='10px'>
            {error && <Text>{error}</Text>}
            {loading && skeletons.map((skeleton) => <GameCardContainer key={skeleton} card={<CardSkeleton key={skeleton}/>}/>)}
            {games.map(game => <GameCardContainer key={game.name} card={<GameCard key={game.id} game={game}/>}/>)}
        </SimpleGrid>
    )
}

export default GameGrid