import React, { InputHTMLAttributes} from "react"

interface NomeProps extends InputHTMLAttributes<HTMLInputElement>{
    texto: string
    valor: any
    somenteLeitura?: boolean
    classNome?: string
    valorMudou?: (valor: any) => void
}

export default function Nome(props: NomeProps) {
    return (
        <div className={`flex flex-col ${props.className} validate-input`}
        
        data-validate="Campo Obrigatório"
        >
            <label className="mb-2">
                {props.texto}
            </label>
            <input
                type='text'  
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    w-full
                    border border-blue-500 rounded-lg
                    focus:outline-none bg-gray-200 px-4 py-2
                    dark:bg-gray-700
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
             />
        </div>
    )
}