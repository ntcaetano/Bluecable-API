export default class Cliente {
    #id: string
    #Nome: string
    #Cpf_Cnpj: string
    #Data_nasc: string
    #Whatsapp: string
    #Contrato: string
    #Cep: string
    #Endereço: string
    #Cidade: string
    #Vencimento: string
    #Valor_neg: number
    #Vendedor: string

    constructor(
        Nome: string,
        Cpf_Cnpj: string,
        Data_nasc: string,
        Whatsapp: string,
        Contrato: string,
        Cep: string,
        Cidade: string,
        Endereço: string,
        Vencimento: string,
        Valor_neg: number,
        Vendedor: string,
        id: string = null) {

        this.#Nome = Nome
        this.#Cpf_Cnpj = Cpf_Cnpj
        this.#Data_nasc = Data_nasc
        this.#Whatsapp = Whatsapp
        this.#Contrato = Contrato
        this.#Cep = Cep
        this.#Cidade = Cidade
        this.#Endereço = Endereço
        this.#Vencimento = Vencimento
        this.#Valor_neg = Valor_neg
        this.#Vendedor = Vendedor
        this.#id = id
    }

    static vazio() {
        return new Cliente('', 0)
    }

    get id() {
        return this.#id
    }

    get Nome() {
        return this.#Nome
    }

    get Cpf_Cnpj() {
        return this.#Cpf_Cnpj
    }

    get Data_nasc() {
        return this.#Data_nasc
    }

    get Whatsapp() {
        return this.#Whatsapp
    }

    get Contrato() {
        return this.#Contrato
    }

    get Cep() {
        return this.#Cep
    }

    get Cidade() {
        return this.#Cidade
    }

    get Endereço() {
        return this.#Endereço
    }

    get Valor_neg() {
        return this.#Valor_neg
    }

    get Vencimento() {
        return this.#Vencimento
    }

    get Vendedor() {
        return this.#Vendedor
    }

}