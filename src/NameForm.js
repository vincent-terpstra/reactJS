import React from 'react'

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', fruit:'apple'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        if(this.state.name != ''){
            alert(`A name was submitted: ${this.state.name}, Fruit ${this.state.fruit} \n`);
            this.setState({name:''})
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name
                    <input type="text" value = {this.state.name} 
                        onChange={this.handleChange} name="name"/>
                </label><br/>
                <label>Select Fruit
                    <Select options={["banana","apple","grapefruit"]} 
                        value={this.state.fruit} onChange={this.handleChange} name="fruit"/>
                </label><br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

class Select extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const options = this.props.options.map(
            (option)=><option value={option}>{option}</option>
        );

        return (
            <select value={this.props.value} onChange={this.props.onChange} name={this.props.name}>
                {options}
            </select>
        );
    }

}