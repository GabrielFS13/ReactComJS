import {AiFillCloseCircle} from 'react-icons/ai'

import {BsBookmarkHeartFill, BsBookmarkHeart} from 'react-icons/bs'

import './Card.css'

const Card = ({img, nome, cargo, corDeFundo, aoDeletar, id, favorito, aoFav}) =>{
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
                <h5>{cargo}</h5>
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