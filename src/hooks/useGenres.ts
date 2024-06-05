import { CanceledError } from "axios"
import { useState, useEffect } from "react"
import apiService from "../services/api-service"

interface Genre {
    id: number,
    name: string,
    image_background: string
}

const api = apiService()

const useGenres = () => {
    const [error, setError] = useState('')
    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(() => {
        const controller = new AbortController()
        api.get("/genres", {signal: controller.signal})
        .then(res => {
            const {data: {results:genres}} = res
            setGenres(genres)
        })
        .catch(err => {
            if (err instanceof CanceledError)
                return
            setError(err)
        })
        .finally(() => () => controller.abort())
    }, [])

    return {genres, error}
}

export default useGenres