import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/formulario';
import Time from './componentes/Time';
function App() {

  const times = [
    {
      nome: 'Minezera',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Fortnite',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Counter Strike',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Dead By Daylight',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8'
    },
    {
        nome: 'Call Of Duty',
        corPrimaria: '#D86EBF',
        corSecundaria: '#FAE5F5',
    }
]


  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrar={colaborador => aoNovoColaborador(colaborador)} times={times.map(time => time.nome)} />
      {times.map(time => <Time 
                              nome = {time.nome} 
                              key={time.nome} 
                              corPrimaria={time.corPrimaria} 
                              corSecundaria = {time.corSecundaria} 
                              colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}
    </div>
  );
}

export default App;
