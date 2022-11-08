function gerarCard() {
    const sCompany = '';
    const seguidores = document.querySelector(".followers");
    const seguindo = document.querySelector(".following");
    const repos = document.querySelector(".repository");
    const company = document.querySelector(".company");
    const location = document.querySelector(".location");
    const imgUser = document.querySelector(".user-img");

    var url = gerarUrl()

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.message !== 'Not Found') {
                seguidores.textContent = data.followers + " Seguidores"
                seguindo.textContent = data.following + " Seguindo"
                repos.textContent = data.public_repos + " Repositórios"
                imgUser.src = data.avatar_url
                location.textContent = data.location
                company.textContent = CompanyLimit(data.company) 
                
            } else {
                window.alert("Este perfil não foi encontrado, digite um existente.")
            }
        })
}

function CompanyLimit(dataCompany){
    var companyLenght = dataCompany.length;
    if(companyLenght >= 15){
        let resultado = dataCompany.substring(0,13);
        console.log(resultado);
        return resultado + "...";
    }else{
        return dataCompany;
    }
  
}

const card = document.querySelector(".card-user");
const input = document.querySelector("input")
var i = 0;
card.addEventListener("dblclick", function () {
    const body = document.querySelector('body')
    const icon = document.querySelector('.logo')
    const input = document.querySelector('input')
    icon.classList.toggle('white')
    input.classList.toggle('white')
    body.classList.toggle('white')
    
    var background = ['#E6E8E1', '#0e1218']
    card.style.background = background[i];
    input.style.background = background[i]
    i++;
    if (i == 2){
        i = 0
    }
});

function gerarUrl() {
    const input = document.querySelector(".logo-text");
    const url = 'https://api.github.com/users/'
    var user = input.value;

    return url + user;
}







