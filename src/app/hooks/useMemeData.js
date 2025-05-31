import axios from "axios";
import { useEffect, useState } from "react";

function useMemeData(subreddit, count) {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`https://meme-api.com/gimme/${subreddit}/${count}`)
            setData(response.data)
        } catch (e) {
            setError(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return { data, isLoading, error }
}

export default useMemeData