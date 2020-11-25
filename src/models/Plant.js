import axios from 'axios';

const endPoint = `https://super-crud.herokuapp.com/todos`;

class PlantModel {
    static all = () => {
      let request = axios.get(endPoint);
    //   console.log(request)
      return request;
    };
};

export default PlantModel;