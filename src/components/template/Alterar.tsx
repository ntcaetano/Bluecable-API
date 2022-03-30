import { useState } from "react";
import Cliente from "../../core/Cliente";
import Botao from "./Botao";
import Cep from "./labels/Cep";
import Contrato from "./labels/Contrato";
import CpfCnpj from "./labels/CpfCnpj";
import Nascimento from "./labels/Nascimento";
import Nome from "./labels/Nome";
import Whatsapp from "./labels/Whatsapp";
import Endereco from "./labels/Endereco";
import Cidade from "./labels/Cidade";
import Vencimento from "./labels/Vencimento";
import Negociacao from "./labels/Negociacao";
import Vendedor from "./labels/Vendedor";
import Mensagem from "./labels/Mensagem";

interface AlteraProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Altera(props: AlteraProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [cpfCnpj, setCpfCnpj] = useState(props.cliente?.cpfCnpj ?? '')
    const [dataNasc, setDataNasc] = useState(props.cliente?.dataNasc ?? '')
    const [whatsApp, setWhatsApp] = useState(props.cliente?.whatsApp ?? '')
    const [contrato, setContrato] = useState(props.cliente?.contrato ?? '')
    const [cep, setCep] = useState(props.cliente?.cep ?? '')
    const [endereco, setEndereco] = useState(props.cliente?.endereco ?? '')
    const [cidade, setCidade] = useState(props.cliente?.cidade ?? '')
    const [vencimento, setVencimento] = useState(props.cliente?.vencimento ?? '')
    const [valorNeg, setValorNasc] = useState(props.cliente?.valorNeg ?? 0)
    const [vendedor, setVendedor] = useState(props.cliente?.vendedor ?? '')
    const [mensagem, setMensagem] = useState(props.cliente?.mensagem ?? '')
    return (
        <div>
            {id ? (
                <Nome
                    tipo="number"
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Nome
                tipo="text"
                texto="Nome Completo"
                valor={nome}
                valorMudou={setNome}
                className="mb-5" 
                
             />
            <CpfCnpj
                texto="Cpf/Cnpj"
                valor={cpfCnpj}
                valorMudou={setCpfCnpj}
                className="mb-5"
            />
            <Nascimento
                texto="Data de nascimento"
                valor={dataNasc}
                valorMudou={setDataNasc}
                className="mb-5"
                tipo={"date"}
                />
            <Whatsapp
                texto="WhatsApp"
                valor={whatsApp}
                valorMudou={setWhatsApp}
                className="mb-5"
            />
            <Contrato
                texto="Contrato"
                valor={contrato}
                valorMudou={setContrato}
                className="mb-5"
            />
            <Cep
                texto="Cep"
                valor={cep}
                valorMudou={setCep}
                className="mb-5"
            />
            <Endereco
                texto="Endereço"
                valor={endereco}
                valorMudou={setEndereco}
                className="mb-5"
            />
            <Cidade
                texto="Cidade"
                valor={cidade}
                valorMudou={setCidade}
                className="mb-5"
            />
            <Vencimento
                texto="Vencimento"
                valor={vencimento}
                valorMudou={setVencimento}
                className="mb-5"
                tipo={"date"}
            />
            <Negociacao
                texto="Valor da Negociação"
                valor={valorNeg}
                valorMudou={setValorNasc}
                className="mb-5"
            />
            <Vendedor
                texto="Vendedor"
                valor={vendedor}
                valorMudou={setVendedor}
                className="mb-5"
            />
            <Mensagem
                texto="Observação"
                valor={mensagem}
                valorMudou={setMensagem}
                className="mb-5"
            />



            <div className="flex justify-end mt-7">
                <Botao className="mr-2"
                    onClick={() => props.clienteMudou?.(
                        new Cliente(
                            nome,
                            cpfCnpj,
                            dataNasc,
                            whatsApp,
                            contrato,
                            cep,
                            endereco,
                            cidade,
                            vencimento,
                            valorNeg,
                            vendedor,
                            mensagem,
                            id
                        ))}>
                    {id ? 'Alterar' : 'Registrar'}
                </Botao>
            </div>
        </div>
    )
}
