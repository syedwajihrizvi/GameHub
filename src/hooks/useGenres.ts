import { CanceledError } from "axios"
import { useState, useEffect } from "react"
import apiService from "../services/api-service"

export interface Genre {
    id: number,
    name: string,
    image_background: string
}

const api = apiService()

const useGenres = () => {
    const [error, setError] = useState('')
    const [genres, setGenres] = useState<Genre[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
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
        .finally(() => setLoading(false))
        return () => controller.abort()
    }, [])

    return {genres, error, loading}
}

export default useGenres