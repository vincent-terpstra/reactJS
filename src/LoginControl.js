import React from 'react'
import Greeting from './Conditional.js'

function Button(props) {
    return (
        <button onClick={props.onClick}>
            {props.title}
        </button>
    )
}

export default class LoginControl extends React.Component {
    constructor(props){
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        this.state = {isLoggedIn: false}
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const onClick = isLoggedIn ? this.handleLogoutClick : this.handleLoginClick;
        const title   = isLoggedIn ? "Logout" :"Login";
        
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                <Button onClick={onClick} title={title}/>
            </div>
        );
    }
}