import React from "react"

export default function Memegen (){
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    function handleChange(event){
        
        const {name, value} = event.target

        setMeme(prevMeme => ({
            ...prevMeme, 
            [name]: value
        }))
    }

    function getMemeImage (){
        fetch("https://meme-api-09gx.onrender.com/api/v1/images/gimme")
            .then(res => res.json())
            .then(data => {
                setMeme(prevMeme => {
                    return {
                        ...prevMeme,
                        randomImage: data.imageFile
                    }
                })
            })
    }

    
    return (

        <main className="flex items-center justify-center flex-col">
            <div className="grid grid-rows-2 grid-cols-2 gap-5 justify-center pt-12">
                <input 
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}