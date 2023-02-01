import React, { Component } from "react";

class ClassButton extends Component {
    render () {
        const { onButtonClick, times } = this.props


        return <button onClick={onButtonClick('class')}>
                    class, times: {times}
                </button>
    }
}

export default ClassButton;