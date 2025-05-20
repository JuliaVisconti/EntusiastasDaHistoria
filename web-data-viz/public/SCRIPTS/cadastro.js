function criar_minha_conta() {
    var nome = nome_usuario_cadastro.value;
    var apelido = nome_apelido_cadastro.value;
    var telefone = telefone_usuario_cadastro.value;
    var email = ipt_email_cadastro.value;
    var senha = ipt_senha_cadastro.value;
    var confirmaSenha = ipt_confirmacao_senha_cadastro.value;


    if ( nome == "" || email == "" || apelido == "" || confirmaSenha == "" || senha == "" || telefone == "") {
       alert("Você precisa preencher todos os campos!!")
       return
    } else if (senha != confirmaSenha) {
        alert("Senha incoerente")
        return
    }


    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nome,
        apelidoServer: apelido,
        telefoneServer: telefone,
        emailServer: email,
        senhaServer: senha
    }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");
          window.location = "./login.html";
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
}