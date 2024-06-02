import { Card, CardBody, Image, VStack, Heading, Flex, Spacer, Center} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import Platform from "./Platforms"
import Score from "./Score"
import getCroppedUrl from '../services/image-url';

interface Props {
    game: Game
}

function GameCard({game}: Props) {
    const platforms = [...game.parent_platforms].map(platform => platform.platform)
    return (
        <Card width='400px' borderRadius={3} overflow="hidden" variant="outline">
        <CardBody>
         <VStack>
            <Image borderRadius={3} src={getCroppedUrl(game.background_image)} />
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