import { useAuth } from '../../hooks/useAuth'
import { IconeAjustes, IconeCasa, IconeSair} from '../Icons'
import Logo from './Logo'
import MenuItem from './MenuItem'

export default function MenuLateral() {

    const { logout } = useAuth()

    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-blue-900 to-blue-400
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
            </ul>
            <ul>
                <MenuItem texto="Sair" icone={IconeSair}
                    onClick={logout}
                    className={`
                    text-red-600
                    hover:bg-red-400 hover:text-white
                `}
                />
            </ul>
        </aside>
    )
}