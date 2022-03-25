import { useTema } from "../../hooks/useTema"
import AvatarUsuario from "./AvatarUsuario"
import BotaoAlternarTema from './BotaoAlternarTema'
import Titulo from './Titulo'

interface CabecalhoProps{
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps) {
    const {tema, AlternarTema} = useTema()
    return (
        <div className={`flex`}> 
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoAlternarTema tema={tema} AlternarTema={AlternarTema}/>
                <AvatarUsuario className="ml-3"/>
            </div>
        </div>
    )
}