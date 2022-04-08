import { createContext, useEffect, useState } from "react";

type FormContextProps = {
    Registrando?: boolean
  }

const FormContext = createContext<FormContextProps>({})

// async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
//     const token = await usuarioFirebase.getIdToken()
//     return {
//         uid: usuarioFirebase.uid,
//         nome: usuarioFirebase.displayName,
//         email: usuarioFirebase.email,
//         token,
//         provedor: usuarioFirebase.providerData[0].providerId,
//         imagemUrl: usuarioFirebase.photoURL
//     }
// }

// export function AppProvider(props) {
//     const [Registrando, setRegistrando] = useState(true)
//     const [usuario, setUsuario] = useState<Usuario>(null)

//     async function configurarSessao(usuarioFirebase) {
//         if (usuarioFirebase?.email) { 
//             const usuario = await usuarioNormalizado(usuarioFirebase)
//             setUsuario(usuario)
//             gerenciarCookie(true)
//             setRegistrando(false)
//             return usuario.email
//         } else {
//             setUsuario(null)
//             gerenciarCookie(false)
//             setRegistrando(false)
//             return false
//         }
//     }


// async function Registrar(email, senha) {
//     // const cookie = "bluecable-auth; sameSite=none; secure";
//     try {
//         setRegistrando(true)
//         const resp = await firebase.auth()
//             .signInWithEmailAndPassword(email, senha)

//         await configurarSessao(resp.user)
//         route.push('/')
//     } finally {
//         setRegistrando(false)
//     }
// }