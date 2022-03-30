import { IconeLua, IconeSol } from "../Icons"

interface BotaoAlternarTemaProps {
    tema: string
    AlternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
    return props.tema === 'dark' ? (
        <div onClick={props.AlternarTema} className={`
            hidden sm:flex items-center cursor-pointer
            bg-gradient-to-r from-blue-300 to-blue-600
            w-14  lg:w-24 h-8 p-1 rounded-full
        `}>
            <div className={`
                flex items-center justify-center
                bg-white text-blue-600
                w-6 h-6 rounded-full
            `}>
                {IconeSol(4)}
            </div>
            <div className={`
                hidden lg:flex items-center ml-2
                text-white
            `}>
                <span className="text-sm"></span>
            </div>
            <div>

            </div>
        </div>
    ) : (
        <div onClick={props.AlternarTema} className={`
            hidden sm:flex items-center justify-end cursor-pointer
            bg-gradient-to-r from-gray-500 to-gray-900
            w-14  lg:w-24 h-8 p-1 rounded-full
            `}>
            <div className={`
            hidden lg:flex items-center mr-1
            text-gray-300
            `}>
            <span className="text-sm"></span>
            </div>
            <div className={`
                    flex items-center justify-center
                    bg-black text-blue-300
                    w-6 h-6 rounded-full
                    `}>
                {IconeLua(4)}
            </div>
            <div>

            </div>
        </div>
    )
}