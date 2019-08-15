import axios from "axios";

export default {
    getFin: function() {
        return axios.get("/api/data");
    },
    getData2: function(id) {
        return axios.get("api/data/" + id)
    },
    saveData: function(id) {
        return axios.put("api/data/" + id)
    }
};