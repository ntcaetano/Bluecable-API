import * as React from "react";

interface CpfCnpjProps {
    texto: string
    valor: any
    className?: string
    valorMudou?: (valor: any) => void
    somenteLeitura?: boolean
}

export default function CpfCnpj(props: CpfCnpjProps) {

    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input
                type='text'
                placeholder="999.999.999-99 - 99.999.999/9999-99"
                maxLength={13}
                minLength={11}
                value={props.valor}
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

