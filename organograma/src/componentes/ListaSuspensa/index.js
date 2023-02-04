import './ListaSuspensa.css'

const ListaSuspensa = (props) =>{
     //Nas Label's use htmlFor, for é a palavara reservada para o loop lá, já o htmlFor é o for usado nas label's para focar o input
    return(
        <div className="lista-suspensa">
            <label htmlFor={props.label}>{props.label}</label>
            <select id={props.label} required={props.obrigatorio} onChange={e => props.aoAlterado(e.target.value)} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa