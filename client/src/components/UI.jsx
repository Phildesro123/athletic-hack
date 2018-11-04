import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './UI.css';
import Canvas from './Canvas'


class UI extends Component {

    state = {
        name: '',
        tempArray: [
            {x: 0.5, y: 0.8},
            {x: 0.6, y: 0.3},
            {x: 0.4, y: 0.6},
            {x: 0.5, y: 0.2},
            {x: 0.2, y: 0.3},
            {x: 0.7, y: 0.4},
            {x: 0.5, y: 0.2},
            {x: 0.3, y: 0.7},
        ]
    }

<<<<<<< HEAD
    componentDidMount() {
        if (props.currentVersion==null){
            console.log('remounted UI');
            let newState = {...this.state};
            if (this.props.currentVersion == null) {
                newState.tempArray = [];
            } else {
                newState.tempArray = this.props.currentVersion.coordinates;
            }
        }
    }
=======

>>>>>>> 41185a5ab2d7fa44a32b9a4ebfeb2ac4d6b558eb

    render () {
        return (
            <div className="UI">
                <div className="Top-part">
                    {/*Save Button*/}
                    <button
                        className="btn btn-primary m-2"
                        onClick={() => (this.props.onSaveClick(this.state.name, this.state.tempArray))}>
                        Submit
                    </button>

                    {/*When field state changes, change name*/}
                    <div className="input-group m-2">
                        <input
                            value={this.state.name}
                            onChange={ this.handleChange }
                            type="text"
                            className="form-control"
                            placeholder="New Player Name"
                            aria-label="Username"
                            aria-describedby="basic-addon1"/>
                    </div>
                    {/*Testing button click to to function*/}
                    <button
                        className="btn btn-success m-2"
                        onClick={() => (this.props.onNewClick())}>
                        New Data Set
                    </button>
                </div>
                <div className="CanvasPart">
                    <Canvas tempArray={this.state.tempArray}/>
                </div>
            </div>
        );
    }

    handleChange = (e) => {
        let newState = {...this.state};
        newState.name = e.target.value;
        this.setState(newState);
        console.log(this.state.name);
    }

    handleClick = () => {
        console.log(this.state.name);
    }


}

export default UI;