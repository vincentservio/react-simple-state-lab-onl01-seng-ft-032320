import React, { Component } from 'react'

export default class cell extends Component {
    constructor(props){
    super(props)
    this.state = {
        color: props.value,
        handleClick: props.handleClick
    }

}
    handleClick = () => {
        this.setState({
            color: "#333"
        })
    }

    render() {
        return (
            <div className="cell" onClick={this.handleClick} style={{ backgroundColor: this.state.color }}>
                
            </div>
        )
    }
}
