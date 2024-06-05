import { Skeleton, Card, CardBody, SkeletonText } from "@chakra-ui/react"

function CardSkeleton() {
    return (
        <Card variant='outline'>
            <Skeleton height='200px'/>
            <CardBody>
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </CardBody>
        </Card>
    )
}

export default CardSkeleton