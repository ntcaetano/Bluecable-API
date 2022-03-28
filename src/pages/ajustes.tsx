import Layout from "../components/template/Layout";
import Tabela from "../components/template/Tabela";
import Formulario from "../components/template/Formulario";

import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    cliente,
    clientes,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-600 to-blue-400
      text-white
    `}>
      <Layout titulo="Tabela">
        {tabelaVisivel ? (
          <>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}