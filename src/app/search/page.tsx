'use client'

import axios from "axios"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

function Search() {

    const searchParams = useSearchParams()
    const subreddit = searchParams.get('q')

    const [memes, setMemes] = useState([])

    useEffect(() => {
        const fetchSubreddits = async () => {
            const response = await axios.get(`https://meme-api.com/gimme/${subreddit}/50`)
            setMemes(response.data.memes)
        }
        fetchSubreddits()
    }, [])

    return (
        <div>
            {memes && (
                memes.map(meme => (
                    <div key={meme.postLink}>
                        <p>{meme.subreddit}</p>
                        <p>{meme.title}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default Search