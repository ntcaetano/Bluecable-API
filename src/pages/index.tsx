import Formulario from "../components/template/Alterar";
import Layout from "../components/template/Layout";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    cliente,
    novoCliente,
  } = useClientes()

  return (

    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-700 to-blue-400
        text-white
      `}>
      <Layout titulo="Renegociação">
        <div className="w-full marker:flex justify-end">
          <div className="flex-wrap">
            <Formulario
              cliente={cliente}
              clienteMudou={novoCliente}
            />
          </div>
        </div>
      </Layout>
    </div>


  )
}

