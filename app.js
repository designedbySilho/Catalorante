
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se for vazio n mostra nada
    if(!campoPesquisa) {
    section.innerHTML = "<p>Escreva algo para pesquisar</p>"
    return
    }


    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = ""
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na array 'dados' e constrói o HTML para cada resultado
    for (let dado of dados) {
        
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta"> ${dado.descricao}</p> 
                <a href="${dado.link}" target="_blank">Conheça mais aqui</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "Não encontramos nada..."

    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados
}

