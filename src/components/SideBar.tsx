import { List, Image, ListItem, Text, HStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

function SideBar() {
    const {genres, error} = useGenres()
    return (
    <List spacing={3}>
        {genres.map(genre => {
            return (
                <ListItem key={genre.id} padding="5px">
                    <HStack>
                        <Image src={getCroppedUrl(genre.image_background)} boxSize='32px' borderRadius={8}/>
                        <Text marginLeft="3px" as='b' fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            )
        })}
    </List>
    )
}

export default SideBar