import Formulario from "../components/template/Alterar";
import Layout from "../components/template/Layout";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    cliente,
    salvarCliente,
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-700 to-blue-400
      text-white
    `}>
      <Layout titulo="Renegociação">
        <div className="w-full marker:flex justify-end">
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
          />
        </div>
      </Layout>
    </div>
  )
}

