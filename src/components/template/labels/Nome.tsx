import { useCallback } from "react"

interface NomeProps {
    tipo: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Nome(props: NomeProps) {

    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input
                placeholder="Digite seu nome completo"
                maxLength={50}
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    w-full
                    border border-blue-500 rounded-lg
                    focus:outline-none bg-gray-200 px-4 py-2
                    dark:bg-gray-700
                    ${props.somenteLeitura ? '' : 'focus:bg-white dark:focus:bg-gray-600'}
                `}
            />
        </div>
    )
}