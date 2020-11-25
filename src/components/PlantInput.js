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
    updateSuggestedPlants = (data)=>{
        console.log(data);
        const allPlants = data.map((plant)=>{
            return <option>{plant.common_name}</option>;
        });
        console.log(allPlants)
        this.setState({suggestedPlants:allPlants})
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component Update")
    }
    componentDidMount() {
        console.log("Component Mounted")
 
    }
    inputChange = (event) => {
        this.setState({ inputVal: event.target.value })
        axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?q=${event.target.value}&token=VCRNIazx57aRMI9uKWJ7MafD-aurOIQdLtK4IuWroJI&filter_not[common_name]=null`,{
            headers: {
              'Access-Control-Allow-Origin': '*',
            }})
        .then((response)=>{
            // handle success
            // console.log(response.data.data);
            this.updateSuggestedPlants(response.data.data);
            // this.makeLogs(response.data.features)
            // console.log(this.state)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    
    render() {
        return (
        <form className="form">
            <input 
            onChange={this.inputChange}
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
            <select className="selectpicker" searchable="Search here..">
                {this.state.suggestedPlants}
            </select>

        </form>
        );
    }
}

export default PlantInput;
