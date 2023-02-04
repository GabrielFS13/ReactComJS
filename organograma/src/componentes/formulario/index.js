import './Formulario.css'
import CampoTexto from '../CampoDeTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) =>{
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        "Devops",
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')



    const aoSalvar = (e) =>{
        e.preventDefault()
        props.aoCadastrar({
            nome,
            cargo,
            img,
            time
        })

    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>

                <CampoTexto 
                    obrigatorio={false} 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={img}
                    aoAlterado={valor => setImg(valor)}/>

                <ListaSuspensa 
                    label="Time"
                    itens={times} 
                    obrigatorio={true}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}
                     />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario