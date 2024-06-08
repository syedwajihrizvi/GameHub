import { List, Image, ListItem, Text, Link, HStack, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

interface Props {
    onGenreSelect: (genre:Genre) => void
    activeGenre: Genre | null
}

function SideBar({onGenreSelect, activeGenre}: Props) {
    const {genres, error ,loading} = useGenres()

    if (error)
        return null
    if (loading)
        return <Spinner marginLeft='35%' size='xl' color='green.300'/>
    return (
        <List spacing={3}>
            {genres.map(genre => {
                return (
                    <ListItem key={genre.id} borderRadius={8} padding="5px" onClick={() => onGenreSelect(genre)} background={genre.id == activeGenre?.id ? 'green.300' : ''}>
                        <HStack>
                            <Image objectFit='cover' src={getCroppedUrl(genre.image_background)} boxSize='32px' borderRadius={8}/>
                            <Link><Text marginLeft="3px" as='b' fontSize='lg'>{genre.name}</Text></Link>
                        </HStack>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default SideBar