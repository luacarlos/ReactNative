import { useState } from 'react'
import { Text, Button, View } from "react-native";

export default function   App(){
  const [contador, setContador] = useState(0)//variável relativa
  const [usuario, setUsuario] = useState<Usuario>({
    id: 1,
    nome: "João",
    email: "joao@email.com"
  })

  type Usuario ={
    id: number
    nome: string
    email: string
  }

  function somar(a: number, b: number): number{
    return a + b
  }

  return(
    <View>
      <Text>Você clicou {contador} vezes</Text>
      <Button title="Clique aqui" onPress={()=>setContador(contador + 1)}/>
      <Button
        title="Atualizar usuário"
        onPress={()=>
        setUsuario({
          id:2,
          nome:"Ederson",
          email:"costa@email.com"
        })
      }/>
      <Text>{usuario.id} {usuario.nome} {usuario.email}</Text>
    </View>
  )
}

