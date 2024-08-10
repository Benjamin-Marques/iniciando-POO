var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//classe superior
var Usuario = /** @class */ (function () {
    function Usuario(idUsuario) {
        this.idUsuario = idUsuario;
    }
    Usuario.prototype.verificarLoguin = function () {
        return true;
    };
    return Usuario;
}());
//subclasse
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(idUsuario, nomeCliente, emailCLiente, endereco) {
        var _this = _super.call(this, idUsuario) || this;
        _this.nomeCliente = nomeCliente;
        _this.emailCLiente = emailCLiente;
        _this.endereco = endereco;
        return _this;
    }
    Cliente.prototype.cadastro = function () {
        console.log("".concat(this.nomeCliente, " Cadastrado com sucesso"));
    };
    return Cliente;
}(Usuario));
//subclasse
var Administrador = /** @class */ (function (_super) {
    __extends(Administrador, _super);
    function Administrador(idUsuario, nomeAdm, emailAdm) {
        var _this = _super.call(this, idUsuario) || this;
        _this.nomeAdm = nomeAdm;
        _this.emailAdm = emailAdm;
        return _this;
    }
    Administrador.prototype.atualizarCatalogo = function () {
        console.log("Administrador(a) ".concat(this.nomeAdm, " atualizando o catalogo."));
    };
    return Administrador;
}(Usuario));
//instancias
var cliente1 = new Cliente(10, "Benjamin", "benjamin@gmail.com", "Rua Eneida 03");
var administrador1 = new Administrador(2, "Juliana Paes", "Juliana123@gmail.com");
//utulizando os objetos
cliente1.cadastro();
administrador1.atualizarCatalogo();
