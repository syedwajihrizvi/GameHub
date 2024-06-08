import { Badge, Text } from "@chakra-ui/react"

interface Props {
    score: number
}

function Score({score}: Props) {
    const getColorScheme = (score: number) => {
        if (score > 70)
            return "green"
        if (score > 50 && score <= 70)
            return "yellow"
        return "red"
    }
    return (
        <Badge borderRadius={4} ml='1' fontSize={{sm: '1.6em', md: '0.8em', lg: '1.0em', xl: '1.2em'}} colorScheme={getColorScheme(score)}>
            <Text>{isNaN(score) ? "-" : score}</Text>
        </Badge>
    )
}

export default Score