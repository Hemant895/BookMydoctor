const {default: axios} = require("axios")

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const AxiosClient = axios.create(
    {
        baseURL:'http://localhost:1337/api' ,
        headers:{
          'Authorization': `Bearer ${API_KEY}`
        }
    }
)
const getCategory =() =>(AxiosClient.get('/categories?populate=*'))     
export default {
    getCategory
}        