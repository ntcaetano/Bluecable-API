interface BotaoProps {
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-blue-900 to-blue-600
            text-white px-4 py-2 rounded-md
            transition ease-in-out delay-140 hover:-translate-y-1 hover:scale-110 duration-200
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}