const body = document.querySelector(".counteudo");

const div = document.querySelector("#cep")
const cep = document.querySelector(".cep")
const logradouro = document.querySelector(".logradouro")
const complemento = document.querySelector(".complemento")
const bairro = document.querySelector(".bairro")
const localidade = document.querySelector(".localidade")
const uf = document.querySelector(".uf")
const ddd = document.querySelector(".ddd")
const span = document.querySelector("span")
const form = document.querySelector("form")


div.addEventListener("change", () => {
    form.addEventListener("keypress", (event) => {
        event.preventDefault()
    })
    const valor = div.value
    const js = fetch(`https://viacep.com.br/ws/${valor}/json/`)
    
    js.then((resposta) => {
        return resposta.json();
    }).then((dados) => {
        if (dados.cep !== undefined) {
            cep.innerHTML = dados.cep
            logradouro.innerHTML = dados.logradouro
            complemento.innerHTML = dados.complemento
            bairro.innerHTML = dados.bairro
            localidade.innerHTML = dados.localidade
            uf.innerHTML = dados.uf
            ddd.innerHTML = dados.ddd
            span.innerHTML = ""
            div.style.borderColor = "green"
        } else {
            cep.innerHTML = "Nada por aqui"
            logradouro.innerHTML = "Nada por aqui"
            complemento.innerHTML = "Nada por aqui"
            bairro.innerHTML = "Nada por aqui"
            localidade.innerHTML = "Nada por aqui"
            uf.innerHTML = "Nada por aqui"
            ddd.innerHTML = "Nada por aqui"
            span.innerHTML = "Verifique o CEP e tente novamente!"
            div.style.borderColor = "red"
        }
    })

})