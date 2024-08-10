//classe superior
class Usuario{
    idUsuario: number;

    constructor(idUsuario: number){
        this.idUsuario = idUsuario
    }

    verificarLoguin(){
        return true
    }

}
//subclasse
class Cliente extends Usuario{
    nomeCliente: string;
    emailCLiente:string;
    endereco: string;

    constructor(idUsuario:number ,nomeCliente: string,emailCLiente:string,endereco: string){
        super(idUsuario);
        this.nomeCliente = nomeCliente;
        this.emailCLiente = emailCLiente;
        this.endereco = endereco;
    }
    cadastro(){
        console.log(`${this.nomeCliente} Cadastrado com sucesso`)
    }
}
//subclasse
class Administrador extends Usuario{
    nomeAdm: string;
    emailAdm: string

    constructor(idUsuario:number, nomeAdm: string, emailAdm:string){
        super(idUsuario)
        this.nomeAdm = nomeAdm;
        this.emailAdm = emailAdm
    }

    atualizarCatalogo(){
        console.log(`Administrador(a) ${this.nomeAdm} atualizando o catalogo.`)
    }

}
//instancias
const cliente1 = new Cliente(10, "Benjamin", "benjamin@gmail.com", "Rua Eneida 03");
const administrador1 = new Administrador(2, "Juliana Paes", "Juliana123@gmail.com" )

//utulizando os objetos
cliente1.cadastro()

administrador1.atualizarCatalogo()