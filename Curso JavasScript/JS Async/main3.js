axios.get('https://api.github.com/users/tiagobellaver')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });