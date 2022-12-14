
interface AuthImputProps {
    label: string,
    valor: any,
    obrigatorio?: boolean,
    naoRenderizarQuando?: boolean,
    tipo?: 'test' | 'email' | 'password'
    valorMudou: (novoValor: any) => void
}

export default function AuthImput(props: AuthImputProps) {
    return props.naoRenderizarQuando ?
        null
        : (
            <div className="flex flex-col mt-4">
                <label>{props.label}</label>
                <input
                    type={props.tipo ?? "text"}
                    value={props.valor}
                    onChange={e => props.valorMudou?.(e.target.value)}
                    required={props.obrigatorio}
                    className={`
                        px-5 py-3 rounded-lg bg-gray-200 mt-2
                        border focus:border-blue-500 focus:bg-white
                        focus: outline-none
                    `}
                />
            </div>
        )
}