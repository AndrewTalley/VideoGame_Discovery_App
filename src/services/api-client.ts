import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '289a1b3b92c648af8f061b36d09475f6'
  }
})
