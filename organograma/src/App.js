import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/formulario';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Minezera',
      cor: '#d9f7e9'
    },
    {
      id: uuidv4(),
      nome: 'Fortnite',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Counter Strike',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Dead By Daylight',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'Call Of Duty',
      cor: '#FAE5F5'
    }
])

const inicial = [
    { 
      id: uuidv4(),
      favorito: false,
      nome: "Gabriel",
      time: "Dead By Daylight",
      nick: "Falcão",
      img: "https://github.com/GabrielFS13.png"
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: "Gabriel F",
      time: "Minezera",
      nick: "FalcãoShadow",
      img: "https://github.com/GabrielFS13.png"
    }
]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColab(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudaCorTime(cor, id){
    setTimes(times.map(time =>{
      if(time.id === id){
        time.cor = cor
      }

      return time
    }))
  }

  function novoTime(novo){
    setTimes([...times, {...novo, id: uuidv4}])
  }

  function aoFav(id){
    setColaboradores(colaboradores.map(colaborador =>{
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  const aoNovoColaborador = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario
                aoCadastrar={colaborador => aoNovoColaborador(colaborador)} 
                novoTime = {novoTime}
                times={times.map(time => time.nome)} 
                />
      {times.map(time => <Time 
                              nome = {time.nome} 
                              id = {time.id}
                              key={time.nome} 
                              cor = {time.cor} 
                              colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
                              aoDeletar={deletarColab}
                              mudarCorTime = {mudaCorTime}
                              aoFav = {aoFav}
                              />)}
    </div>
  );
}

export default App;
