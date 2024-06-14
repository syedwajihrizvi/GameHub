import { Container, Spinner } from "@chakra-ui/react";

function LoadingGames() {
    return (
        <Container>
            <Spinner color="green.300"/>
        </Container>
    )
}

export default LoadingGames