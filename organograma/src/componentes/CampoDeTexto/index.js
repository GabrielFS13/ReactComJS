import './CampoTexto.css'

const CampoTexto = (props) =>{
    return(
        <div className="campo-texto">
            <label for={props.label}>
                {props.label}
            </label>

            <input placeholder={props.placeholder} id={props.label}/>
        </div>
    )
}

export default CampoTexto