import React, { Component } from 'react'
// import Input from './component/Input'
import './App.css'



 class App extends Component {

  state={number:"0",
  result:""}
  
  handelclear= event =>{
    const {number} = this.state
    this.setState({number:"0"})
  }

handelback=event=>{
  const {number} = this.state
 let back= number.slice(0,-1)
  this.setState({number:back})
}

 handelpercent=event=>{
  const {number} = this.state
  let persentt = number/100
  console.log(persentt)
  this.setState({number:persentt})
}
handeltogel=event=>{
  const {number} = this.state;
  this.setState({number:number.charAt(0)=== "-" ? number.substr(1): "-" + number})
  
}

 handeldot=event=>{
   const {number} = this.state
   if(number.indexOf(".")===-1){
     this.setState({number:number + "."})
   }
 }
    handelclick= event =>{
      const {number} = this.state
    this.setState({number:number === "0" ? event.target.name : number + event.target.name})
    }

  submit = event =>{
    const {number} = this.state;
    console.log("submit")
    try{
      let result = (eval(number).toString());
     this.setState({number:result})

    }catch(err){
      console.error("error")
    }
     
  }
  render() {
    return (
      <div className="cal">
        <input type="text" value={this.state.number} ></input>
        <div className="keys">
        <button onClick={this.handelclear} className="button hilight">C</button>
        <button  onClick={this.handelback} className="button">back</button>
        <button name="%" onClick={this.handelpercent} className="button">%</button>
        <button name="/" onClick={this.handelclick} className="button">/</button>
        <button name="1" onClick={this.handelclick} className="button">1</button>
        <button name="2" onClick={this.handelclick} className="button">2</button>
        <button name="3" onClick={this.handelclick} className="button">3</button>
        <button name="*" onClick={this.handelclick} className="button">*</button>
        <button name="4" onClick={this.handelclick} className="button">4</button>
        <button name="5" onClick={this.handelclick} className="button">5</button>
        <button name="6" onClick={this.handelclick} className="button">6</button>
        <button name="-" onClick={this.handelclick} className="button">-</button>
        <button name="7" onClick={this.handelclick} className="button">7</button>
        <button name="8" onClick={this.handelclick} className="button">8</button>
        <button name="9" onClick={this.handelclick} className="button">9</button> 
        <button name="+" onClick={this.handelclick} className="button">+</button>
        <button name="+/-" onClick={this.handeltogel} className="button">+/-</button>
        <button name="0" onClick={this.handelclick} className="button">0</button>
        <button name="." onClick={this.handeldot} className="button">.</button>
        <button onClick={this.submit} className="button">=</button>
        </div>

        

      </div>
    )
  }
}

export default App
