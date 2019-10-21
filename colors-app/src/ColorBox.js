import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render() {
        return (
            <div style={{ background: this.props.background }} className="ColorBox">
                <spam>{this.props.name}</spam>
                <span>MORE</span>
            </div>
        )
    }
}

export default ColorBox;
