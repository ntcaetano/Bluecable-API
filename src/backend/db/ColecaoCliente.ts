import firebase from "../config";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                Nome: cliente.Nome,
                Cpf_Cnpj: cliente.Cpf_Cnpj,
                Data_nasc: cliente.Data_nasc,
                Whatsapp: cliente.Whatsapp,
                Contrato: cliente.Contrato,
                Cep: cliente.Cep,
                Endereco: cliente.Endereco,
                Cidade: cliente.Cidade,
                Vencimento: cliente.Vencimento,
                Valor_neg: cliente.Valor_neg,
                Vendedor: cliente.Vendedor,
                Mensagem: cliente.Mensagem,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(
                dados.Nome,
                dados.Cpf_Cnpj, 
                dados.Data_nasc, 
                dados.Whatsapp, 
                dados.Contrato, 
                dados.Cep, 
                dados.Endereco,
                dados.Cidade,
                dados.Vencimento,
                dados.Valor_neg,
                dados.Vendedor,
                dados.Mensagem,
                snapshot.id
            )}
    }
    
    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor)
    }
}