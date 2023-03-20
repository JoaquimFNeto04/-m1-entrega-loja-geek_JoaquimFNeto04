let itens = [
    produto1 = {
        image: '../assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 100.00,
        type: 'Painting'
    },
    produto2 = {
        image: '../assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 100.00,
        type: 'Painting'
    },
    produto3 = {
        image: '../assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 100.00,
        type: 'Painting'
    },
    produto4 = {
        image: '../assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 100.00,
        type: 'Action Figures'
    },
    produto5 = {
        image: '../assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 100.00,
        type: 'Action Figures'
    },
    produto6 = {
        image: '../assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 100.00,
        type: 'Action Figures'
    },
    produto7 = {
        image: '../assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 100.00,
        type: 'Action Figures'
    },
    produto8 = {
        image: '../assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 100.00,
        type: 'Action Figures'
    },
    produto9 = {
        image: '../assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 100.00,
        type: 'Action Figures'
    }
];

let ulsFrames = document.getElementsByClassName("ulsFrames")[0];
let ulsFigures = document.getElementsByClassName("ulsFigures")[0];

function separateItens(itens){
    const coin = { style: 'currency', currency: 'BRL' };

    for (let i = 0; i < itens.length; i++) {
        let card = document.createElement("li");
        card.classList.add("card");
    
        let image = document.createElement("img");
        image.src = itens[i].image;
        card.appendChild(image);
    
        let name = document.createElement("span");
        name.innerText = `${itens[i].name}`;
        card.appendChild(name);
    
        let price = document.createElement("p");
        price.textContent = itens[i].price.toLocaleString('pt-BR', coin);
        card.appendChild(price);
    
        let type = document.createElement("p");
        type.textContent = itens[i].type;
        card.appendChild(type);
        if (itens[i].type === 'Painting') {
            ulsFrames.appendChild(card);
        }
        else if (itens[i].type === 'Action Figures') {
            ulsFigures.appendChild(card);
        }
    }
}

separateItens(itens);




