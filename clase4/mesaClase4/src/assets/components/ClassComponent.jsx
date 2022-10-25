import React, { Component } from 'react'
import MockComponent from './MockComponent'



class ClassComponent extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div> {this.props.informacion.saludo}
      <MockComponent message = "Vengo de ClassComponent"/>
       </div>
    )
  }
}

export default ClassComponent

