import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';                               
 import Welcome from 'G:/ReactJS/my-app/src/components/Welcome';
import { Component } from 'react';
import Header from './components/header'
        
class App extends Component {                                                   
  render(){
  return (
    <div className="App">
       <Greet  name='bruce' heroName="Batman" >
        <p>This the hero of gautom city</p>
       </Greet>
       <Greet  name='Wyne' heroName='Robin'>
        <button >Action</button>
       </Greet>
       <Greet  name='Clark'heroName='Superman' />
<Welcome  name='bruce' heroName="Batman"></Welcome>
<Welcome  name='bruce' heroName="Batman"></Welcome>

       {/* <Header/> */}
    </div>
  );  
}
}

export default App;
