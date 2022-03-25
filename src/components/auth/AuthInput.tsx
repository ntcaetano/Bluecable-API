interface AuthInputProsps {
    label: string
    valor: any
    obrigatorio?: boolean
    tipo: 'text' | 'email' | 'password'
    valorMudou: (novoValor: any) => void
}


export default function AuthInput(props: AuthInputProsps) {
    return(
        <div className="flex flex-col mt-4">
            <label>{props.label}</label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.obrigatorio}
                className={`
                    bg-gray-200 px-4 py-3 rounded-lg mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none
                `}
             />
        </div>
    )
}