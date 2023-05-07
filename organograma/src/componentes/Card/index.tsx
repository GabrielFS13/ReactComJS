import {AiFillCloseCircle} from 'react-icons/ai'

import {BsBookmarkHeartFill, BsBookmarkHeart} from 'react-icons/bs'

import './Card.css'

interface cardProps{
    id: string,
    img: string,
    nome: string,
    corDeFundo: string,
    data: string
    favorito: boolean,
    aoDeletar: (id: string) => void,
    aoFav: (id: string) => void
}

const Card = ({img, nome, data, corDeFundo, aoDeletar, id, favorito, aoFav}: cardProps) =>{
    function fav(){
        aoFav(id)
    }

    const propsFav = {
        size: 35,
        onClick: fav
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
            size={35}
            className='deletar'
            onClick={() => aoDeletar(id)} />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={img} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{new Date(data).toLocaleDateString()}</h5>
                <div className='favoritar'>
                    {favorito 
                    ? <BsBookmarkHeartFill {...propsFav} color="#FF0000"/> 
                    : <BsBookmarkHeart {...propsFav} />}
                </div>
            </div>
        </div>
    )
}

export default Card