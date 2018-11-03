import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


class UI extends Component {

    state = {
        name: 'newVer',
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

    render () {
        return (
            <div className="UI">
                <div className="TopPart">
                    <button
                        className="btn btn-primary"
                        onClick={() => (this.props.onSaveClick(this.state.name, this.state.tempArray))}>
                        Submit
                    </button>
                </div>
                <div className="CanvasPart">
                    <div>
                        <input type="text" onChange={ this.handleChange } />
                        <input
                            type="button"
                            value="Alert the text input"
                            onClick={this.handleClick}
                        />
                    </div>
                </div>
            </div>
        );
    }

    handleChange = (e)   => {
        let newState = {...this.state};
        newState.name = e.target.id;
        this.setState(newState);
        console.log(e.target);
        console.log(this.state.name);
    }

    handleClick = () => {
        console.log(this.state.name);
    }

}

export default UI;