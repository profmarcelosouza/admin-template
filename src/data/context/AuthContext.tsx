import route from "next/router";
import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Usuario from "../../model/Usuario";
import Cookies from '../../../node_modules/js-cookie/dist/js.cookie';

interface AuthContextProps {
    usuario?: Usuario,
    loginGoogle?: () => Promise<void>,
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(usuarioFirebase: firebase.User) {
    const token = await usuarioFirebase.getIdToken();

    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL,
    }
}

function gerenciarCookie(logado: boolean) {
    if (logado) {
        Cookies.set('admin-template-cod3r-auth', logado, {
            expiries: 7,
        });
    } else {
        Cookies.remove('admin-template-cod3r-auth')
    }
}

export function AuthProvider(props) {
    const [carregando, setCarregando] = useState(true);
    const [usuario, setUsuario] = useState<Usuario>(null);

    async function configurarSessao(usuarioFirebase) {
        if (usuarioFirebase?.mail) {
            const usuario = await usuarioNormalizado(usuarioFirebase);
            setUsuario(usuario);
            gerenciarCookie(true);
            setCarregando(false);
            return usuario.email;
        } else {
            setUsuario(null);
            gerenciarCookie(false);
            setCarregando(false);
            return false;
        }
    }

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )

        configurarSessao(resp.user)
        route.push('/')
    }

    useEffect(() => {
        const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
        return () => cancelar();
    }, []);

    return (
        <AuthContext.Provider value={{
            usuario,
            loginGoogle,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext