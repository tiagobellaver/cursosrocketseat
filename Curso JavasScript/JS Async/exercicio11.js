var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositoires(repositories){
    for (repo of repositories) {
        const textElement = document.createTextNode(repo.name);
        const listElement = document.createElement('li');

        listElement.appendChild(textElement);
        listElement.appendChild(listElement);
    }
}

function listRepositories() {
    var user = inputElement.value;

    if(!user) return;

    axios.get('http://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepositoires(response.data);
        })
}