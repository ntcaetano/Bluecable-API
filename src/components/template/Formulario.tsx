import { useState } from "react";
import Cliente from "../../core/Cliente";
import Botao from "./Botao";
import Cep from "./placeholder/Cep";
import Contrato from "./placeholder/Contrato";
import CpfCnpj from "./placeholder/CpfCnpj";
import Nascimento from "./placeholder/Nascimento";
import Nome from "./placeholder/Nome";
import Whatsapp from "./placeholder/Whatsapp";
import Endereco from "./placeholder/Endereco";
import Cidade from "./placeholder/Cidade";
import Vencimento from "./placeholder/Vencimento";
import Negociacao from "./placeholder/Negociacao";
import Vendedor from "./placeholder/Vendedor";
import Mensagem from "./placeholder/Mensagem";

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
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Nome
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
                    {id ? 'Alterar' : 'Enviar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
