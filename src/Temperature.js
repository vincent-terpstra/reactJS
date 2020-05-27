import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Farenheit'
}
const conversion = {
    c: function(f){
        return (f - 32) * 5 / 9;
    },
    f: function(c){
        return (c * 9 / 5) - 32
    },
    a: function(c){
        return c;
    }
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input))
        return '';
    
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Temperature extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        let temp = this.props.temperature;
        let temperature = temp.scale != this.props.scale ? tryConvert(temp.temperature, conversion[temp.scale]) : temp.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[this.props.scale]}</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }

    handleChange(e){
        this.props.onTemperatureChange(e.target.value, this.props.scale);
    }
}

export default class Display extends React.Component {
   constructor(props){
       super(props);
       this.handleChange = this.handleChange.bind(this);

       this.state = {temperature:'', scale:'c'}
   }

   handleChange(temp, scale){
        this.setState({temperature: temp, scale: scale})
   }
    render(){
        return (
            <div>
                <Temperature scale="c" onTemperatureChange={this.handleChange} temperature={this.state}/>
                <Temperature scale="f" onTemperatureChange={this.handleChange} temperature={this.state}/>
            </div>
        );
    }

}