   //GET - READ
   function buscarDados() {
    
    fetch(`livros/`, { 
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);


        //console.log(data[3].nome);


        for(i=0;i<data.length;i++){
            document.getElementById("tabela").innerHTML +=
            "<tr>"+
                "<td>"+data[i].nome+"</td>"+
                "<td>"+data[i].autor+"</td>"+
                "<td>"+data[i].preco+"</td>"+
                "<td>"+data[i].editora+"</td>"+
                "<td>"+data[i].edicao+"</td>"+
                "<td>"+data[i].categoria+"</td>"+
                "<td>"+data[i].faixa+"</td>"+
                "<td>"+data[i].idioma+"</td>"+
                "<td>"+data[i].paginas+"</td>"+
                "<td>"+
                    "<button onclick='deletar("+data[i].id+")'>🗑</button> <!--Delete-->"+
                "</td>"+  
             "</tr>" 
        }
     });
   
  }

  //DELETE
function deletar(id){
  // const id = document.getElementById("id_busca").value

  fetch(`livros/${id}`, {
    method: "DELETE",
}).then((response) => response.json());
}

  

  
