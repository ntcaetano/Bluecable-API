import MenuLateral from "./MenuLateral"
import Cabecalho from "./Cabecalho"
import { useTema } from "../../hooks/useTema"
import ForçarAutenticacao from "../auth/ForcarAutenticacao"
import Conteudo from "./Conteudo"

interface LayoutProps {
    titulo?: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { tema } = useTema()
    return (
        <ForçarAutenticacao>
            <div className={`${tema} flex h-screen w-screen`}>
                <MenuLateral />
                <div className={`
            flex flex-col w-full p-7 
            bg-gray-300 dark:bg-gray-800
            text-gray-800 dark:text-gray-300
        `}>
                    <Cabecalho titulo={props.titulo} />
                    <div className= "overflow-y-auto">
                        <Conteudo>
                            {props.children}
                        </Conteudo>
                    </div>
                </div>
            </div>
        </ForçarAutenticacao>
    )
}