import axios from 'axios';

export default axios.create({
  baseURL: 'https://morning-depths-36159.herokuapp.com/api'
})