import { useTema } from "../../hooks/useTema"
import AvatarUsuario from "./AvatarUsuario"
import BotaoAlternarTema from './BotaoAlternarTema'
import Titulo from './Titulo'

interface CabecalhoProps{
    titulo: string
}

export default function Cabecalho(props: CabecalhoProps) {
    const {tema, AlternarTema} = useTema()
    return (
        <div className="flex p-6"> 
            <Titulo titulo={props.titulo}/>
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoAlternarTema tema={tema} AlternarTema={AlternarTema}/>
                <AvatarUsuario className="ml-3"/>
            </div>
        </div>
    )
}