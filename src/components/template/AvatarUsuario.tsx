import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsusario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth();
    console.log(usuario);
    return (
        <div className='flex flex-col justify-center items-center text-white ml-6'>
            <Link href="/perfil">
                <img
                    src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                    alt="Avatar"
                    className={`
                    h-12 w-12 rounded-full cursor-pointer
                    ${props.className}
                    `}
                />
            </Link>
            <span>{usuario?.nome ?? 'Zé das Couves'}</span>
        </div>

    );
}