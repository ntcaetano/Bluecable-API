import { useState } from "react";
import Cliente from "../../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface AlteraProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Altera(props: AlteraProps) {
    const id = props.cliente?.id
    const [Nome, setNome] = useState(props.cliente?.Nome ?? '')
    const [Cpf_Cnpj, setCpf_Cnpj] = useState(props.cliente?.Cpf_Cnpj ?? 0)
    const [Data_nasc, setData_nasc] = useState(props.cliente?.Data_nasc ?? 0)
    const [Whatsapp, setWhatsapp] = useState(props.cliente?.Whatsapp ?? 0)
    const [Contrato, setContrato] = useState(props.cliente?.Contrato ?? 0)
    const [Cep, setCep] = useState(props.cliente?.Cep ?? 0)
    const [Endereço, setEndereço] = useState(props.cliente?.Endereço ?? 0)
    const [Cidade, setCidade] = useState(props.cliente?.Cidade ?? 0)
    const [Vencimento, setVencimento] = useState(props.cliente?.Vencimento ?? 0)
    const [Valor_neg, setValor_neg] = useState(props.cliente?.Valor_neg ?? 0)
    const [Vendedor, setVendedor] = useState(props.cliente?.Vendedor ?? 0)
    const [Registro, setRegistro] = useState(props.cliente?.Registro ?? 0)
    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Entrada
                texto="Nome"
                valor={Nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Entrada
                texto="Cpf/Cnpj"
                tipo="text"
                valor={Cpf_Cnpj}
                valorMudou={setCpf_Cnpj}
                className="mb-5"
            />


            <div className="flex justify-end mt-7">
                <Botao className="mr-2"
                    onClick={() => props.clienteMudou?.(
                        new Cliente(
                            Nome,
                            Cpf_Cnpj,
                            Data_nasc,
                            Whatsapp,
                            Contrato,
                            Cep,
                            Endereço,
                            Cidade,
                            Vencimento,
                            Valor_neg,
                            Vendedor,
                            Registro,
                            id
                        ))}>
                    {id ? 'Alterar' : 'Registrar'}
                </Botao>
            </div>
        </div>
    )
}