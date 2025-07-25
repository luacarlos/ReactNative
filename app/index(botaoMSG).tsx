import { View, Text, Button } from "react-native"
export default function App(){

    function mostrarMensagem():void{
        alert("Você clicou noo botão!")
    }

    return(
        <View style={{padding:20}}>
            <Button title="Clique aqui!" 
            onPress={mostrarMensagem}/>
        </View>
    )
}