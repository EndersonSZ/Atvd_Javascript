function adicionarFilme(){
    //pegando a informação do input
    var filmeFavorito = document.getElementById("filme").value;
    // verifica se a extensão da imagem é jpg, caso não será informado um erro
    if(filmeFavorito.endsWith(".jpg")){
        listarFilmesNaTela(filmeFavorito)
    }else{

    }
   
    document.getElementById("filme").value = ""

}

function listarFilmesNaTela(filme){
    //imprimir na tela
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}