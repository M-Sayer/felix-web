import config from '../config'

const TransactionApiService = {
    getSingleTransaction(type,id){
        return fetch(`${config.API_ENDPOINT}/transactions/${type}/${id}`)
            .then(res => 
                (!res.ok)
                ?res.json().then(e => Promise.reject(e))
                :res.json()
                )
    },
    updateSingleTransaction( type, id, content){
        return fetch(`${config.API_ENDPOINT}/transactions/${type}/${id}`, {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(content)
        })
        .then(res => 
            (!res.ok)
            ?res.json().then(e => Promise.reject(e))
            :res.json()
            )
    }
};


export default TransactionApiService;