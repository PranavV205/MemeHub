import { useEffect, useState } from "react";

function useMemeData(subreddit, count) {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://meme-api.com/gimme/${subreddit}/${count}`)
            const res = await response.json()
            setData(res)
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