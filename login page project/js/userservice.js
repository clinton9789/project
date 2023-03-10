class UserService {

    /**
     * This is is for login function
     * @param {*} email 
     * @param {*} password1 
     * @param {*} role 
     * @returns 
     */
    static login(email, password1, role) {


        const url = endPoint + "trainticketapp_users/_find";

        const requestData = {
            selector: {
                email: email,
                password: password1,
                role: role
            },
            fields: ["_id", "name", "email", "role"],
        };

        return axios.post(url, requestData, {
            headers: {
                Authorization: basicAuth
            }
        });
    }

    /**
     * this is register function
     * @param {*} formValues 
     * @returns 
     */
    static register(formValues) {



        const url = endPoint + "trainticketapp_users";

        return axios.post(url, formValues, {
            headers: {
                'Authorization': basicAuth
            }
        });

    }



}