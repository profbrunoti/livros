//CRIAR
function criar(){
    var nome = document.getElementById("nome").value
    var autor = document.getElementById("autor").value
    var preco = document.getElementById("preco").value
    var editora = document.getElementById("editora").value
    var edicao = document.getElementById("edicao").value
    var categoria = document.getElementById("categoria").value
    var faixa = document.getElementById("faixa").value
    var idioma = document.getElementById("idioma").value
    var paginas = document.getElementById("paginas").value

    fetch('livros',{
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nome: nome, autor: autor, preco: preco, editora: editora, edicao: edicao, categoria: categoria,
          faixa: faixa, idioma: idioma, paginas: paginas}),
    }).then((Response) => Response.json());
}
