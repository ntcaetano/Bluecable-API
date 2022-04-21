import React, { InputHTMLAttributes, useCallback} from "react"

interface NegociacaoProps extends InputHTMLAttributes<HTMLInputElement>{
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Name(props: NegociacaoProps) {
    
    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d)(\d{2})$/, "$1,$2");
        value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
        e.currentTarget.value = value;
        return e;  
    }, [])

    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input
                placeholder="000.00"
                maxLength={6}
                type='text'
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
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