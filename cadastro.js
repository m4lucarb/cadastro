class CadastroUsuarios {
    constructor() {
        this.usuarios = [];
    }

    incluirUsuario(cpf, nome, email) {
        this.usuarios.push({ cpf, nome, email });
        console.log("Usuário cadastrado!");
    }

    excluirUsuario(cpf) {
        this.usuarios = this.usuarios.filter(user => user.cpf !== cpf);
        console.log("Usuário excluído!");
    }

    pesquisarUsuario(nome) {
        return this.usuarios.filter(user => user.nome.includes(nome));
    }

    listarUsuarios() {
        console.log(this.usuarios);
    }
}

const cadastro = new CadastroUsuarios();
cadastro.incluirUsuario("123.456.789-00", "João Silva", "joao@email.com");
cadastro.incluirUsuario("987.654.321-00", "Maria Oliveira", "maria@email.com");
cadastro.listarUsuarios();
