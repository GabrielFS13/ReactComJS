import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Card from '../Card'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

interface timeProps{
    id: string,
    colaboradores: IColaborador[],
    nome: string,
    cor: string,
    mudarCorTime: (v1: string, v2: string) => void,
    aoFav: (id:  string) => void,
    aoDeletar: (id:  string) => void
}

const Time = (props:timeProps) =>{
    return(
        (props.colaboradores.length) > 0 ?
        <section className="time" style={{ backgroundColor: hexToRgba(props.cor, '0.6') }}>
            <input value={props.cor} type="color" className='input-cor' onChange={e => props.mudarCorTime(e.target.value, props.id)} />
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return <Card 
                    id={colaborador.id}
                    corDeFundo={props.cor} 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    img={colaborador.img} 
                    favorito = {colaborador.favorito}
                    data = {colaborador.data}
                    aoFav = {props.aoFav}
                    aoDeletar={props.aoDeletar}
                    />
                })}
    
            </div>
        </section>
        : <></>
    )
}

export default Time