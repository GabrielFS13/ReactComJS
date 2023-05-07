import './Banner.css'

interface BannerProps{
    endereco: string,
    textoAlt?: string
}
export default function Banner({endereco, textoAlt}: BannerProps){
    //JSX
    return (
        <header className="banner">
            <img src={endereco} alt={textoAlt} />
        </header>
    )
}