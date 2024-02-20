  //GET - READ
  function buscarDados() {
    const id = document.getElementById("id_busca").value;

    fetch(`http://localhost:3000/livros/${id}`, { 
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => { 

        document.getElementById("mostra_dados").innerHTML =
           
        "<label for='nome'>Nome</label>"+ "     " +
        "<input type='text' id='nome' value='"+data.nome + "'><br>" +

        "<label for='autor'>Autor</label>"+ "     " +
        "<input type='text' id='autor' value='"+data.autor + "'><br>" +

        "<label for='preco'>Preço</label>"+ "     " +
        "<input type='text' id='preco' value='"+data.preco + "'><br>" +

        "<label for='editora'>Editora</label>"+ "     " +
        "<input type='text' id='editora' value='"+data.editora + "'><br>" +

        "<label for='edicao'>Edição</label>"+ "     " +
        "<input type='text' id='edicao' value='"+data.edicao + "'><br>" +

        "<label for='categoria'>Categoria</label>"+ "     " +
        "<input type='text' id='categoria' value='"+data.categoria + "'><br>" +

        "<label for='faixa'>Classificação</label>"+ "     " +
        "<input type='text' id='faixa' value='"+data.faixa + "'><br>" +

        "<label for='idioma'>Idioma</label>"+ "     " +
        "<input type='text' id='idioma' value='"+data.idioma + "'><br>" +
 
        "<label for='paginas'>Páginas</label>"+ "     " +
        "<input type='text' id='paginas' value='"+data.paginas + "'><br>"

      });
}
           

   //PUT - UPDATE

function att() {
  const id = document.getElementById("id_busca").value;
  const nome_att = document.getElementById("nome").value;
  const autor_att= document.getElementById("autor").value;
  const preco_att= document.getElementById("preco").value;
  const editora_att= document.getElementById("editora").value;
  const edicao_att= document.getElementById("edicao").value;
  const categoria_att= document.getElementById("categoria").value;
  const faixa_att= document.getElementById("faixa").value;
  const idioma_att= document.getElementById("idioma").value;
  const paginas_att= document.getElementById("paginas").value;


  console.log(nome)


  fetch(`http://localhost:3000/livros/${id}`, {
  method: "PUT",
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify({nome: nome_att, autor: autor_att, preco: preco_att, editora: editora_att, edicao: edicao_att, categoria: categoria_att,
    faixa: faixa_att, idioma: idioma_att, paginas: paginas_att}),
  }).then((response) => response.json());
}
