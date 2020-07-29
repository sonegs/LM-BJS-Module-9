//fetch("https://www.breakingbadapi.com/api/")
fetch("https://api.github.com/orgs/apple/members")
    .then(response => {
        return response.json();
    }).then(data => {
        for (var item of data) {
            console.log(item.login);
        }
    }).catch(error => {
        document.write("Se ha producido un error en la llamada a la API");
    });