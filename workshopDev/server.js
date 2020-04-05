const express = require('express');
const server = express();

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam libero, magnam maxime sed impedit tempora consequuntur.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam libero, magnam maxime sed impedit tempora consequuntur.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam libero, magnam maxime sed impedit tempora consequuntur.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam libero, magnam maxime sed impedit tempora consequuntur.",
        url: "http://rocketseat.com.br"
    }
]

server.use(express.static("public"));

const nunjucks = require('nunjucks');
nunjucks.configure('views', { express: server, noCache: true,});

server.get('/', function(req, res) {

    const reversedIdeas = [...ideas].reverse();

    let lastIdeas = []
    for (let idea of reversedIdeas){
        if(lastIdeas.length < 3) {
            lastIdeas.push(idea);
        }
    }

    return res.render('index.html', { ideas: lastIdeas });
});

server.get('/ideias', function(req, res) {

    const reversedIdeas = [...ideas].reverse();

    return res.render('ideias.html', { ideas: reversedIdeas });
});

server.listen(3000);