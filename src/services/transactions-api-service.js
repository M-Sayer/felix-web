import config from '../config'
import TokenService from './token-services'

const TransactionApiService = {
    getSingleTransaction(type,id){
        return fetch(`${config.API_ENDPOINT}/transaction/${type}/${id}`)
            .then(res => 
                (!res.ok)
                ?res.json().then(e => Promise.reject(e))
                :res.json()
                )
    },
};


export default TransactionApiService;