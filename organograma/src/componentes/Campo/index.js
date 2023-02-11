import './CampoTexto.css'

const Campo = (props) =>{
    //Nas Label's use htmlFor, for é a palavara reservada para o loop lá, já o htmlFor é o for usado nas label's para focar o input
    //     O valor  Altera o valor (seta o valor)
    //      lê     escreve
    //const [valor, setValor] = useState('')

    const aoDigitado = (e) =>{
        props.aoAlterado(e.target.value)
    }
    
    return(
        <div className={`campo-texto campo-${props.tipo}`}>
            <label htmlFor={props.label}>
                {props.label}
            </label>

            <input value={props.valor} type={props.tipo} onChange={aoDigitado} placeholder={props.placeholder} id={props.label} required={props.obrigatorio}/>
        </div>
    )
}

export default Campo