import axios from 'axios';

export default {
    Login(dataUser) {
        return axios.post('http://localhost/Github-repositorios/park-ease-react/API/user/login', dataUser, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.data; // Retornar apenas os dados da resposta, excluindo o objeto de resposta completo
        }).catch(error => {
            // Rejeitar a promessa com o erro para que o chamador possa capturá-lo
            throw error;
        });
    },

    Cadastro(dataUser) {
        return axios.post('http://localhost/Github-repositorios/park-ease-react/API/user/cadastro', dataUser, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.data;
        }).catch(error => {
            throw error;
        });
    }
}
