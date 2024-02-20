function cadastro(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confsenha = document.getElementById("confsenha").value;


//confere se as senhas são iguais
if(senha==confsenha){


    //Para envio dos dados para o servidor, utilizamos o método fetch
    fetch('http://localhost:3000/pessoas',{
        method: 'POST' ,


        headers:{
            'Content-Type':
            'application/json'
        },
        body: JSON.stringify({
            nome: nome, email: email, senha: senha, 
        })
    })
    .then(response => response.json())


    //pós o cadastro, volta para a tela de login
    window.location.href = "index.html";


}else{
    alert("As senhas inseridas não são iguais");
}

}

function fazerLogin(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    fetch('http://localhost:3000/pessoas/')
    .then(response => response.json())
    .then(data =>{
        
        //Função callback. Parâmetro find para procurar.
        const pessoa = data.find(p => p.
            email === email && p.senha == senha);


            if(pessoa){
                window.location.href = "livross.html";
            }else{
                alert("Cadastro não encontrado!");
            }
    })
}
