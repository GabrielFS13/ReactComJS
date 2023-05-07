import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/formulario';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';
import { IColaborador } from './compartilhado/interfaces/IColaborador';

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


  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  function deletarColab(id: string){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudaCorTime(cor: string, id: string){
    setTimes(times.map(time =>{
      if(time.id === id){
        time.cor = cor
      }

      return time
    }))
  }

  function novoTime(novo: {nome: string, cor: string}){

    setTimes([...times,  {nome: novo.nome, cor: novo.cor, id: uuidv4()}])

  }

  function aoFav(id: string){
    setColaboradores(colaboradores.map(colaborador =>{
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  const aoNovoColaborador = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner textoAlt='' endereco='/imagens/banner.png'/>
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
