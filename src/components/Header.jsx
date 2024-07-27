import troll from "../assets/troll-face.png"

export default function Header() {
    return (
        <header>
            <img src={troll} />
            <h1>MemeGen</h1>
            <img src={troll} />
        </header >
    )
}