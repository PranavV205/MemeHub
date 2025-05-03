'use client'

import InfiniteMenu from '@/components/ui/InfiniteMenu'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Subreddits() {

    const [subreddits, setSubreddits] = useState([])

    useEffect(() => {
        const fetchSubreddits = async () => {
            const response = await axios.get('https://meme-api-09gx.onrender.com/api/v1/landing/subreddit')
            setSubreddits(response.data)
        }
        fetchSubreddits()
    }, [])

    console.log(subreddits)

    const items = subreddits.map((subreddit, index) => {
        return {
            image: subreddit.imageFile,
            link: '',
            description: subreddit.sub,
        }
    })

    return (
        <InfiniteMenu items={items} />
    )
}

export default Subreddits