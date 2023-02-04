import './Formulario.css'
import CampoTexto from '../CampoDeTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) =>{

    const [nome, setNome] = useState('')
    const [nick, setnick] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e) =>{
        e.preventDefault()
        props.aoCadastrar({
            nome,
            nick,
            img,
            time
        })

        setNome('')
        setnick('')
        setImg('')
        

    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do "homie"</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Nick" 
                    placeholder="Digite o seu Nickaname"
                    valor={nick}
                    aoAlterado={valor => setnick(valor)}/>

                <CampoTexto 
                    obrigatorio={false} 
                    label="Fotinha"
                    placeholder="Digite o endereço da sua fotinha (https://..."
                    valor={img}
                    aoAlterado={valor => setImg(valor)}/>

                <ListaSuspensa 
                    label="Time"
                    itens={props.times} 
                    obrigatorio={true}
                    valor={time}
                    aoAlterado = {valor => setTime(valor)}
                     />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario