import Card from '../Card'
import './Time.css'
import hexToRgba from 'hex-to-rgba';


const Time = (props) =>{
    return(
        (props.colaboradores.length) > 0 &&
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
                    cargo={colaborador.cargo} 
                    img={colaborador.img} 
                    time={colaborador.time} 
                    aoDeletar={props.aoDeletar}
                    favorito = {colaborador.favorito}
                    aoFav = {props.aoFav}
                    />
                })}
    
            </div>
        </section>
        
    )
}

export default Time