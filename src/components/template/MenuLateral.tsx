import { IconeAjustes, IconeCasa, IconeNotificacao, IconeSair } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col
                items-center justify-center
                bg-gradient-to-r from-indigo-500 via-green-800 to-purple-700
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notícias" icone={IconeNotificacao} />
            </ul>
            <ul>
                <MenuItem
                    texto="Sair"
                    onClick={() => console.log("logout")}
                    icone={IconeSair}
                    className={`
                        text-red-700
                        transition-all
                        hover:bg-red-400 
                        hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}