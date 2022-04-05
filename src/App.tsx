import React, {Component} from 'react'
import style from './App.module.css'
import Button from './App/components/Button/Button';

interface I_AppProps{
  AppName?:string,
}

interface I_AppState{
  counter:number,
  uneValue:string
}

class App extends Component<I_AppProps, I_AppState>{
  constructor(props:I_AppProps) {
    super(props);
    this.state={counter:0, uneValue: 'hello'};
  }

  componentDidMount(){
    console.log(
      '%c%s', 
      'font-size: 24pt;color:green;font-weight:900', 
      'Le component est monté'
    );
  }

  componentDidUpdate(oldProps:I_AppProps, oldState:I_AppState){
    console.log(oldProps, this.props);
    console.log(oldState, this.state);
    

  }
  render(): React.ReactNode {
    return <div className={style.App}>
      valeur du compteur : {this.state.counter}<br/>
      <Button myClick={() =>{
        this.setState({counter: this.state.counter+1})
      }}> {this.state.uneValue}</Button>  
    </div>
  }

}
export default App;