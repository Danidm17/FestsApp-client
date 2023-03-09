import axios from "axios"

class FestServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/fests`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllFests() {
        return this.api.get('/getAllFests')
    }

    getDetails(fest_id) {
        return this.api.get(`/details/${fest_id}`)
    }

    newFest(festData) {
        return this.api.post('/newFest', festData)
    }

    edit(fest_id, festData) {
        return this.api.put(`/edit/${fest_id}`, festData)
    }

    deleteFest(fest_id) {
        return this.api.delete(`/delete/${fest_id}`)
    }

}

const festsServices = new FestServices()

export default festsServices