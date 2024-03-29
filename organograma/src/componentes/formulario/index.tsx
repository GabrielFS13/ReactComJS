import './Formulario.css'
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';

interface FormularioProps{
    times: string[],
    novoTime: (obj: {nome: string, cor: string}) => void,
    aoCadastrar: (obj: IColaborador) => void
}

const Formulario = (props: FormularioProps) =>{

    const [nome, setNome] = useState('')
    const [nick, setnick] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')
    const [data, setData] = useState('')

    const [novoTime, setNovo] = useState('')
    const [corTime, setCor] = useState('')


    const aoSalvar = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        props.aoCadastrar({
            id: uuidv4(),
            nome,
            nick,
            img,
            time,
            favorito: false,
            data
        })

        setNome('')
        setnick('')
        setImg('')
        setData('')
        

    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do "homie"</h2>
                <Campo 
                    obrigatorio={true}
                    tipo='text'
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>

                <Campo 
                    obrigatorio={true} 
                    tipo='text'
                    label="Nick" 
                    placeholder="Digite o seu Nickaname"
                    valor={nick}
                    aoAlterado={valor => setnick(valor)}/>

                <Campo 
                    obrigatorio={false} 
                    tipo='text'
                    label="Fotinha"
                    placeholder="Digite o endereço da sua fotinha https://..."
                    valor={img}
                    aoAlterado={valor => setImg(valor)}/>

                <Campo
                obrigatorio={true}
                tipo={'date'}
                label="Data"
                placeholder='Data'
                valor={data}
                aoAlterado={ valor => setData(valor)} />

                <ListaSuspensa 
                    label="Time"
                    itens={props.times} 
                    obrigatorio={true}
                    valor={time}
                    aoAlterado = {valor => setTime(valor)}
                     />
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={e => {
                e.preventDefault()

                props.novoTime({nome: novoTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo 
                    obrigatorio={true}
                    label="Nome" 
                    tipo='text'
                    placeholder="Digite o nome do time"
                    valor={novoTime}
                    aoAlterado={valor => setNovo(valor)}/>
                <Campo 
                    obrigatorio={true} 
                    tipo='color'
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCor(valor)}/>
                <Botao>Criar um novo time</Botao>
            </form>
        </section>
    )
}

export default Formulario