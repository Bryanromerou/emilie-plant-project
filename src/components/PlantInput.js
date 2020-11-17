import React, { Component } from 'react';
import axios from 'axios';

class PlantInput extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          inputVal: '',
          suggestedPlants: []
        };
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component Update")
        axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?q=${this.state.inputVal}&token=VCRNIazx57aRMI9uKWJ7MafD-aurOIQdLtK4IuWroJI`)
        .then((response)=>{
            // handle success
            console.log(response);
            // this.makeLogs(response.data.features)
            // console.log(this.state)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    componentDidMount() {
        console.log("Component Mounted")
        // axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?q=${this.state.inputVal}&ttoken=VCRNIazx57aRMI9uKWJ7MafD-aurOIQdLtK4IuWroJI`)
        // .then((response)=>{
        //     // handle success
        //     console.log(response);
        //     // this.makeLogs(response.data.features)
        //     // console.log(this.state)

        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        // })
    }
    
    render() {
        return (
        <form className="form">
            <input 
            onChange={(event) => this.setState({ inputVal: event.target.value })}
            className="form_input" 
            type="text" 
            placeholder="Enter Plant Name"
            value={this.state.inputVal}
            />
            <input 
            // onClick={this.handleFormSubmit}
            className="form_button" 
            type="submit" 
            value="Add Plant" 
            />
        </form>
        );
    }
}

export default PlantInput;
