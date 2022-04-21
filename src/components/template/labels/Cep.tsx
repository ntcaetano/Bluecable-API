import React, { useCallback } from "react"

interface CepProps {
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Cep(props: CepProps) {

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 9;
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{5})(\d)/, "$1-$2");
        e.currentTarget.value = value;
        return e;
    }, [])

    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input
                placeholder="Digite o seu cep"
                maxLength={9}
                type='text'
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.currentTarget.value)}
                onKeyUp={handleKeyUp}
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