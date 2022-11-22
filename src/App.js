import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  let localtime = new Date();
  let co =new Date(localtime.getTime());
  let acMx =new Date(localtime.getTime() - (3600000));
  let Qatar = new Date(localtime.getTime() + (3600000*8));
  let hol =new Date(localtime.getTime() + (3600000*6));
  let fr =new Date(localtime.getTime() + (3600000*6));
  let kr =new Date(localtime.getTime() + (3600000*14));
  let miamiEEuu =new Date(localtime.getTime());
  let lond =new Date(localtime.getTime() + (3600000*5));
  
  const titulo = React.createElement(
    'h1',
    {},
    'la hora es: '
  );



  const horaMexico =  React.createElement(
    'h2',
    {},
    'En Acapulco México: ' + acMx.toLocaleTimeString('en-US')
  );

  const horaColombia =  React.createElement(
    'h2',
    {},
    'En Colombia: ' + new Date().toLocaleTimeString('en-US')
  );

  const horamiami_EEUU =  React.createElement(
    'h2',
    {},
    'En Miami_EEUU: ' + miamiEEuu.toLocaleTimeString('en-US')
  );

  const horaLondres =  React.createElement(
    'h2',
    {},
    'En Londres: ' + lond.toLocaleTimeString('en-US')
  );

  const horaFrancia =  React.createElement(
    'h2',
    {},
    'En Francia: ' + fr.toLocaleTimeString('en-US')
  );

  const horaHolanda =  React.createElement(
    'h2',
    {},
    'En Holanda: ' + hol.toLocaleTimeString('en-US')
  );




  const horaQatar =  React.createElement(
    'h2',
    {},
    'En Qatar: ' + Qatar.toLocaleTimeString('en-US')
  );

  const horaKorea =  React.createElement(
    'h2',
    {},
    'En Korea: ' + kr.toLocaleTimeString('en-US')
  );



 
  


 



  const headerApp = React.createElement(
    'div',
    {className: 'App-header'},
    titulo, horaMexico, horaColombia, horamiami_EEUU, horaLondres,  horaFrancia, horaHolanda,   horaQatar,  horaKorea
  );

  const divApp = React.createElement(
    'div',
    {className: 'App'},
    headerApp
  )


 
  

  //const root = ReactDOM.createRoot(document.getElementById('root'));





  /*const element = (
    <div className="App">
      <header className="App-header">
        <h1>LA hora es:</h1>
        <h2>son en Acapulco Mexico las {acMx.toLocaleTimeString('en-US')}</h2>
        <h2>son en Miami EEUU las {new Date().toLocaleTimeString('en-US')}</h2>
        <h2>son en Korea las {kr.toLocaleTimeString('en-US')}</h2>
        <h2>son en Francia las {fr.toLocaleTimeString('en-US')}</h2>
        <h2>son en Holanda las {hol.toLocaleTimeString('en-US')}</h2>
        <h2>son en Qatar las {utc.toLocaleTimeString('en-US')}</h2>
        <h2>{new Date().to}</h2>

        </header>
        </div>

  );
  
  root.render(element)
  */
  root.render(divApp)
}

export default App;


