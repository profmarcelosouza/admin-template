import { useState } from "react";
import AuthImput from "../components/auth/AuthInput";
import { IconeAtencao, IconeGoogle } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {

    const { usuario, loginGoogle } = useAuth();

    const [erro, setErro] = useState(null);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [modo, setModo] = useState<'login' | 'cadastro'>('login');

    function exibirErro(msg: string, tempoEmSegundos = 5) {
        setErro(msg);
        setTimeout(() => setErro(null), tempoEmSegundos * 1000);
    }

    function submeter() {
        if (modo === 'login') {
            console.log('login');
            exibirErro('Odorreu um erro no Login');
        } else {
            console.log('cadastrar');
            exibirErro('Ocorreu um erro no cadastro');
        }
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="hidden md:block w-1/ lg:w-2/3">
                <img
                    src="https://source.unsplash.com/random"
                    alt="Imagem da Tela de Autenticação"
                    className="h-screen w-full object-cover"
                />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className="text-3xl font-bold- md-5">
                    {modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na Plataforma'}
                </h1>

                {erro ? (
                    <div className={`
                    flex justify-center items-center bg-red-400 text-white py-3 ox-5
                    border-2 border-red-700 my-2 rounded-lg
                 `}>
                        {IconeAtencao(6)}
                        <span className="ml-2">{erro}</span>
                    </div>
                ) :
                    false}



                <AuthImput
                    label="Email"
                    valor={email}
                    valorMudou={setEmail}
                    obrigatorio
                />
                <AuthImput
                    label="senha"
                    valor={senha}
                    tipo="password"
                    valorMudou={setSenha}
                    obrigatorio
                />
                <button onClick={submeter} className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
            `} >
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={loginGoogle} className={`
                w-full bg-red-500 hover:bg-red-400
                text-white rounded-lg px-4 py-3
                `} >
                    Entre com Google
                </button>
                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a
                            onClick={() => setModo('cadastro')}
                            className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer
                            `}> Crie uma conta grtuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a
                            onClick={() => setModo('login')}
                            className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer mt-10
                            `}> Entre com suas Credenciais</a>
                    </p>
                )}
            </div>
        </div>

    )
}