import React from 'react';
import ReactComponent from './react';
function getDetails(){
    const person={
        name:"ABC",
        course:"react"
    }
    return person;
}
function hoc(WrapperComponent) {
    return class extends React.Component{
        constructor()
{
    super();
    this.state={
        name:"ANSHU",
        course:"React"
    }
}   
   render(){

    console.log('state',this.state);
       return <WrapperComponent change={this.setState}{...this.state} />
   }

}

}

const hocComponet=hoc(ReactComponent)

export default hocComponet;