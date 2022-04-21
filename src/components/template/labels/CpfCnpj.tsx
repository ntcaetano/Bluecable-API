import { useCallback } from "react"

interface CpfCnpjProps {
    texto: string
    valor: any
    className?: string
    valorMudou?: (valor: any) => void
    somenteLeitura?: boolean
}

export default function CpfCnpj(props: CpfCnpjProps) {


    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (value.length <= 14) {
            value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/);
            value = value.replace(/\D/g, "");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2');
            value = value.replace(/(-\d{2})\d+?$/, '$1');
            e.currentTarget.value = value;
        } else {
            value = value.replace(/\D/g, "");
            value = value.replace(/(\d{2})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1/$2");
            value = value.replace(/(\d{4})(\d)/, "$1-$2");
            value = value.replace(/(-\d{2})\d+?$/, "$1");
            e.currentTarget.value = value;
        }
        return e;
    }, [])

    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input
                type='text'
                name='text'
                maxLength={18}
                placeholder="999.999.999-99 - 99.999.999/9999-99"
                value={props.valor}
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