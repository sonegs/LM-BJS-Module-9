import axios from "axios";

function getCharacters() {
    return axios
        .get("https://www.breakingbadapi.com/api/characters")
        .then(response => {
            const myPromise = new Promise(resolve => {
                setTimeout(function() {
                    resolve(response.data);
                }, 1000);
            });
            return myPromise;
        });
}

export { getCharacters };