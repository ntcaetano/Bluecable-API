export default class Cliente {
    #id: string
    #nome: string
    #cpfCnpj: string
    #dataNasc: string
    #whatsApp: string
    #contrato: string
    #cep: string
    #endereco: string
    #cidade: string
    #vencimento: string
    #valorNeg: number
    #vendedor: string
    #mensagem: string

    constructor(
        nome: string,
        cpfCnpj: string,
        dataNasc: string,
        whatsApp: string,
        contrato: string,
        cep: string,
        cidade: string,
        endereco: string,
        vencimento: string,
        valorNeg: number,
        vendedor: string,
        mensagem: string,
        id: string = null) {

        this.#nome = nome
        this.#cpfCnpj = cpfCnpj
        this.#dataNasc = dataNasc
        this.#whatsApp = whatsApp
        this.#contrato = contrato
        this.#cep = cep
        this.#cidade = cidade
        this.#endereco = endereco
        this.#vencimento = vencimento
        this.#valorNeg = valorNeg
        this.#vendedor = vendedor
        this.#mensagem = mensagem
        this.#id = id
    }

    static vazio() {
        return new Cliente('', '', '', '', '', '', '', '', '', 0, '', '')
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get cpfCnpj() {
        return this.#cpfCnpj
    }

    get dataNasc() {
        return this.#dataNasc
    }

    get whatsApp() {
        return this.#whatsApp
    }

    get contrato() {
        return this.#contrato
    }

    get cep() {
        return this.#cep
    }

    get cidade() {
        return this.#cidade
    }

    get endereco() {
        return this.#endereco
    }

    get valorNeg() {
        return this.#valorNeg
    }

    get vencimento() {
        return this.#vencimento
    }

    get vendedor() {
        return this.#vendedor
    }
    
    get mensagem() {
        return this.#mensagem
    }

}