const {default: axios} = require("axios")

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const AxiosClient = axios.create(
    {
        baseURL:'http://localhost:1337/api' ,
        headers:{
           'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${API_KEY}`
        }
    }
)
const getCategory =() =>(AxiosClient.get('/categories?populate=*')) 
const getDoctorList =() =>(AxiosClient.get('/doctors?populate=*'))    
const getDoctorByCategory=(category)=>AxiosClient.get('/doctors?filters[category][Name][$in]='+category+"&populate=*")
const getDoctorById=(id)=>(AxiosClient.get('/doctors/'+id+"?populate=*"))
const bookAppoinment=(data)=>(AxiosClient.post('/appoiments',data))
export default {
    getCategory,
    getDoctorList,
    getDoctorByCategory,
    getDoctorById,
    bookAppoinment
}        