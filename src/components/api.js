import axios from "axios";

export default async function queryServer(queryValue) {
    const paramsValue = {
        params: {
            client_id: "j2m5CnZbXuFFpKZA6Aczf6nWhu_eX1W5fkXlkYx1S7A",
            query: queryValue,
            per_page: 5,
        }
    }
    const queryResult = await axios.get("https://api.unsplash.com/search/photos", paramsValue)
    return queryResult.data.results;
}  