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
        <Card variant="outline">
        <CardBody>
         <VStack>
            <Image borderRadius={3} src={getCroppedUrl(game.background_image)} />
            <Center>
            <Heading as='h4' size={{ base: 'lg', md: 'md', lg: 'md', xl: 'lg'}}>{game.name}</Heading>
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