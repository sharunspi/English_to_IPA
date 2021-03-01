import axios from 'axios'
export function getIPAData(data){
    return axios.get('http://localhost:3001/translateToIPA/'+data,{
        header:{
            'Content-Type':'application/json',
            'Accees-Control-Allow-Origin':'*'
        }
    })
}