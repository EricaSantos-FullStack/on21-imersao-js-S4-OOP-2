/* Crie uma classe chamada Author que extenderá de User as informações de email e password e 
terá um atributo privado com o número de post inicializando com 0. 

Essa classe terá dos metódos, um para criar o post que incrementará a quantidade de post e 
o outro obter o número de post criados. 

Observação: Não criaremos a implementação da adição do post; */

class User {
    #password;
    
  
    constructor(name, userName, email, password) {
      this.nome = name;
      this.username = userName;
      this.email = email;
      this.#password = password;
    }
  
    login(email, password) {
      if (email === this.email && password === this.#password) {
        return `Login Realizado!`;
      } else {
        return `Email e senha não estão corretos`;
      }
    }
  
    setPassword(novaSenha) {
      this.#password = novaSenha;
      return `Sua senha foi alterada!`;
    }
  }