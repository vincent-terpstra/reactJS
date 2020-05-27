import React from 'react'

function WarningBanner(props) {
    if(!props.warn)
        return null;

    return (
        <div className = "warning">Warning!</div>
    );
}

export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        //callback binding
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isToggleOn: ! this.state.isToggleOn
        });
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.isToggleOn}/>
                <button onClick = {this.handleClick}>
                    {!this.state.isToggleOn ? 'Show' : 'Hide'}
                </button>
            </div>
        );
    }
}

