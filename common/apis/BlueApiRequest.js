const host = "https://www.thebluealliance.com/api/v3";

const { blueAllianceAPIKey } = require("../../config");

module.exports = {
    MakeBlueApiRequest: async (apiData) =>
    {
        const response = await fetch(host + apiData, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
              "Content-Type": "application/json",
              "X-TBA-Auth-Key": blueAllianceAPIKey
            }
        });

        return response.json();
    }
}