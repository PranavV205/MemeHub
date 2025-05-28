'use client'

import axios from "axios"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import ResultGrid from "@/components/ResultGrid"
import Navbar from "@/components/Navbar"

function Search() {

    const searchParams = useSearchParams()
    const subreddit = searchParams.get('q')

    const [memes, setMemes] = useState([])

    useEffect(() => {
        const fetchSubreddits = async () => {
            const response = await axios.get(`https://meme-api.com/gimme/${subreddit}/20`)
            setMemes(response.data.memes)
        }
        fetchSubreddits()
    }, [])

    return (
        <div>
            <Navbar />
            <div className="p-8">
                {/* need grid and list view toggle */}
                <ResultGrid memes={memes} />
            </div>
        </div>
    )
}

export default Search