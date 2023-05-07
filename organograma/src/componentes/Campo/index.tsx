import './CampoTexto.css'

interface campoProps{
    label: string,
    valor: string | number,
    tipo: string,
    placeholder: string,
    obrigatorio: boolean,
    aoAlterado: (valor: string) => void
}

const Campo = ({aoAlterado, label, valor, tipo, placeholder, obrigatorio}: campoProps) =>{
    //Nas Label's use htmlFor, for é a palavara reservada para o loop lá, já o htmlFor é o for usado nas label's para focar o input
    //     O valor  Altera o valor (seta o valor)
    //      lê     escreve
    //const [valor, setValor] = useState('')

    const aoDigitado = (e: React.ChangeEvent<HTMLInputElement>) =>{
        aoAlterado(e.target.value)
    }
    
    return(
        <div className={`campo-texto campo-${tipo}`}>
            <label htmlFor={label}>
                {label}
            </label>

            <input value={valor} type={tipo} onChange={aoDigitado} placeholder={placeholder} id={label} required={obrigatorio}/>
        </div>
    )
}

export default Campo