import { Card, CardBody, Image, VStack, Heading, Flex, Spacer, Center} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import Platform from "./Platforms"
import Score from "./Score"

interface Props {
    game: Game
}

function GameCard({game}: Props) {
    const platforms = [...game.parent_platforms].map(platform => platform.platform)
    console.log(game)
    return (
        <Card borderRadius={3}>
        <CardBody>
         <VStack>
            <Image borderRadius={3} src={game.background_image} />
            <Center>
            <Heading as='h4' size='lg'>{game.name}</Heading>
            </Center>
         </VStack>
        <Flex mt={2}>
            <Platform platforms={platforms}/>
            <Spacer />
            <Spacer />
            <Score score={parseInt(game.metacritic)}/>
        </Flex>
        </CardBody>
      </Card>
    )
}

export default GameCard