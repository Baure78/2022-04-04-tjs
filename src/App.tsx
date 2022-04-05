import React, {Component} from 'react'
import style from './App.module.css'
import FlexVLayout from './App/components/layouts/FlexVLayout/FlexVLayout';
import MemeForm from './App/components/MemeForm/MemeForm';
import MemeViewer from './App/components/MemeViewer/MemeViewer';
import I_Meme,{DummyMeme as initialMemeState, I_Image} from "./App/interfaces/common";

interface I_AppProps{
  AppName?:string,
}

interface I_AppState{
  currentMeme: I_Meme;
  images: Array<I_Image>;
}

class App extends Component<I_AppProps, I_AppState>{
  constructor(props:I_AppProps) {
    super(props);
    this.state={
      currentMeme:initialMemeState, 
      images:[
        {
          id:0,
          url:'futurama.jpg',
          w:1200,
          h:675,
          name:'futurama'
        }
    ]};
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
      {JSON.stringify(this.state)}
     <FlexVLayout>
      <div>
       <MemeViewer meme={ this.state.currentMeme} image={this.state.images.find(e=>e.id===this.state.currentMeme.imageId)}/>
      </div>
      <MemeForm 
      images={this.state.images} 
      currentMeme={ this.state.currentMeme} 
      onValueChange={(changedValuesObject: any)=>{
        this.setState({currentMeme: {...this.state.currentMeme, ...changedValuesObject}});
      }}/>
     </FlexVLayout>
    </div>
  }

}
export default App;