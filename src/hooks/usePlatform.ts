import { useEffect, useState } from "react"
import apiService from "../services/api-service"
import Platform from "../components/Platforms"
import { CanceledError } from "axios"

const api = apiService()

const usePlatform = () => {
    const [platforms, setPlatforms] = useState<Platform[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()
        api.get('/platforms', {signal: controller.signal})
        .then(res => {
            const {results} = res.data
            setPlatforms(results)
        })
        .catch(err => {
            if (err instanceof CanceledError)
                return
            setError(err)
        })
        return () => controller.abort()
    }, [])

    return {platforms, error}
}

export default usePlatform