const host = "https://frc-api.firstinspires.org/v3.0";

const { firstAPIKey } = require("../../config");

const EncodeTo64 = (toEncode) =>
    {
        return btoa(toEncode);
    }

module.exports = {
    MakeFirstApiRequest: async (apiData) =>
    {

        const encodedApiKey = EncodeTo64(firstAPIKey);

        const response = await fetch(host + apiData, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic " + encodedApiKey
            },
        });
        
        return response.json();
    }
}