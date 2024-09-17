import troll from "../../assets/troll-face.png"

export default function Header() {
    return (
        <header className="flex items-center justify-center h-[120px] gap-[50px] bg-gradient-to-br from-[#aa61aa] to-[#6e0b6e] text-white shadow-[0_7px_10px_rgba(0,0,0,1)] rounded-bl-md rounded-br-md">
            <img src={troll} />
            <h1>MemeGen</h1>
            <img src={troll} />
        </header>
    )
}