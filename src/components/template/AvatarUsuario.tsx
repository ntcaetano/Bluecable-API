import { useAuth } from "../../hooks/useAuth";

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()
    return (
            <img
                src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                alt="Avatar do Usuário"
                className={`
                    h-10 w-10 rounded-full
                    border-2 border-gray-400
                    ${props.className}
                `}
            />    
    )
}
