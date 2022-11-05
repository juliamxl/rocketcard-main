function gerarUrl() {
    const input = document.querySelector(".logo-text");
    const url = 'https://api.github.com/users/'
    var user = input.value;

    return url + user;
}

function gerarCard() {
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
                company.textContent =  data.company
                location.textContent = data.location
            } else {
                window.alert("Este perfil não foi encontrado, digite um existente.")
            }
        })
}




