import placeholder from "../assets/no-image-placeholder-6f3882e0.webp"

const getCroppedUrl = (url: string) => {
    if (!url)
        return placeholder
    const target = 'media/'
    const index = url.indexOf(target) + target.length
    const newUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index)
    return newUrl
}

export default getCroppedUrl