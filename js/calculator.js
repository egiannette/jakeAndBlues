var React = require('react');
var ReactDOM = require('react-dom');

var calculateTotal = function(weight, percentage) {
    console.log('weight: ' + weight + ' percentage: ' + percentage);
    var totalAmount = weight * percentage * .01;
    
    return totalAmount;
};

var Header = React.createClass({
    render: function () {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
});

class MeatPuckCalculator extends React.Component{
    alert("inside of calculatordotjs");

    constructor(props) {
        super(props);
        this.state = {
            weight: this.props.weight,
            percentage: this.props.percentage
        };
    }
    weightChange(event) {
        this.setState({weight: event.target.value});
    }
    percentageChange(event) {
        this.setState({percentage: event.target.value});
    }
   
    render() {
        let amount = calculateTotal(this.state.weight, this.state.percentage);

        console.log('amount: ' + amount);        
        
        return (
            <div className="content">
                <div className="form">
                    <div>
                        <label>Ideal Weight:</label>
                        
                        <input type="text" value={this.state.weight} 
                        onChange={this.weightChange.bind(this)}/>
                    </div>
                    <div>
                        <label>Percentage:</label>
                        <input type="text" value={this.state.percentage} 
                            onChange={this.percentageChange.bind(this)}/>
                    </div>
                </div>
                <h2>Total Amount in lbs: <span>{Number(amount)}</span></h2>
            </div>
        );
    }
};

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header title="Meat Puck Calculator"/>
                <MeatPuckCalculator weight="50" percentage="2"/>
            </div>
        );
    }
});

ReactDOM.render(<App/>,  document.getElementById("app"));