import axios from 'axios';

const endpointApi = window.location.protocol + '//' + window.location.host + '/API/index.php'

export default {
    Login(dataUser) {
        return axios.post('http://localhost/Github-repositorios/park-ease-react/API/index.php', dataUser)
            .then(res => {
                return Promise.resolve(res);
            })
            .catch(error => {
                console.log(error);
            }); 
    },

    Cadastro(dataUser) {
        return axios.post('http://localhost/Github-repositorios/park-ease-react/API/index.php', dataUser)
            .then(res => {
                return Promise.resolve(res);
            })
            .catch(error => {
                console.log(error);
            }); 
    }
}