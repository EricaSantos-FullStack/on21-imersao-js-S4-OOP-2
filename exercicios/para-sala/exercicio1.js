/*Crie uma classe chamada User com os atributos:
- nome;
- username;
- email;
- senha;

Crie os seguintes metódos com as suas regras:

- login: para logar precisa do email e senha e verificar se o email e senha estão corretos, se estiverem, retornar uma mensagem de login realizado,
senão, falha no login;
- alterar senha: possibilidade de trocar a senha atual por uma senha nova.
*/

class User {
    constructor(nome, userName, email, password) {
        this.nome = nome;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    login(email, password) {
        if(email === this.email && password === this.password){
            return "Login successfully"
        } else{
            return "Authentication failed"
        }
    }

    setPassword(newPassword){
        this.password = newPassword;
        return "Password change"
    }

    getEmail(){
        return `se email cadastrado é ${this.email}`
    }
}

const userBia = new User('Beatriz', 'bianonato', 'bia_nonato@icloud.com', 'senha123')
console.log(userBia)

console.log(userBia.login('bia_nonato@icloud.com', 'senha123'))
console.log(userBia.setPassword('senhanova'))

console.log(userBia)