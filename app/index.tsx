import { Text, View, Image, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View className="flex-1 items-center  gap-4 p-4 bg-white flex-col ">

        <View /*Área do Cabeçalho*/ className="w-full h-20 items-center flex-row gap-3 justify-between">
            <View /*Bolinha azul e textos na parte da esquerda do cabeçalho*/ className="flex-row items-center gap-3">
              <View className="w-16 h-16 bg-blue-400 rounded-full "></View>
              <View className="">
                <Text className="font-semibold">Bem-Vindo ao Ecomerce Hub!</Text>
                <Text className="color-slate-600 font-normal">Variedade ao seu alcance</Text>
              </View>
            </View>
            
            <View /*Icons na direita do Cabeçalho*/ className="flex-row gap-3 right-5">
              <Image className="max-h-8 max-w-8 "
                source={require('../assets/images/shopping-cart.png')}
              /> 
              <Image className="max-h-8 max-w-8 "
                source={require('../assets/images/bell.png')}
              /> 
            </View>
          
        </View>

        <View /*Barra de Pesquisa*/ className="w-full ">
          <View className="flex-row items-center justify-between bg-slate-300 p-2 rounded-3xl">
            <View className="flex-row gap-5 items-center">
              <Image className="max-w-5 max-h-5" 
                source={require('../assets/images/search.png')} 
              />  
            <Text className="text-lg text-dark-200 font-normal">
              Pesquise na loja            
              </Text>
            </View>
            <Image className="max-w-5 max-h-5"
              source={require('../assets/images/pic.png')} 
              />  
            </View>
        </View>

        <View /*Quadradao em baixo da barra de pesquisa*/ className="items-center flex-row justify-around w-full h-36 bg-slate-500 rounded-md  ">
          <View className="">
            <Image className=" max-w-32 max-h-32" source={require("../assets/images/fashion.png")}/>
          </View>
          <View className="flex-col justify-center ">
            <Text className="color-white font-normal text-3xl">
              A maior Variedade
            </Text>          
            <Text className="color-white font-normal text-3xl">
              de Produtos da Região
            </Text>          
          </View>
        </View>

        <View /*Area cards*/>
          <View /*Card*/ className="p-5 bg-red-700">
            <Image className="max-w-52 max-h-52 bg-black" 
            source={require("../assets/images/tenis.webp")}/>
            <Text className="color-white font-semibold text-xl">
              Item
            </Text>
            <Text className="color-white text-lg">
              Preço
            </Text>
          </View>
          <View /*Card*/ className="p-5 bg-red-700">
            <Image className="max-w-52 max-h-52 bg-black" 
            source={require("../assets/images/tenis.webp")}/>
            <Text className="color-white font-semibold text-xl">
              Item
            </Text>
            <Text className="color-white text-lg">
              Preço
            </Text>
          </View>
          <View /*Card*/ className="p-5 bg-red-700">
            <Image className="max-w-52 max-h-52 bg-black" 
            source={require("../assets/images/tenis.webp")}/>
            <Text className="color-white font-semibold text-xl">
              Item
            </Text>
            <Text className="color-white text-lg">
              Preço
            </Text>
          </View>
          <View /*Card*/ className="p-5 bg-red-700">
            <Image className="max-w-52 max-h-52 bg-black" 
            source={require("../assets/images/tenis.webp")}/>
            <Text className="color-white font-semibold text-xl">
              Item
            </Text>
            <Text className="color-white text-lg">
              Preço
            </Text>
          </View>
          <View /*Card*/ className="p-5 bg-red-700">
            <Image className="max-w-52 max-h-52 bg-black" 
            source={require("../assets/images/tenis.webp")}/>
            <Text className="color-white font-semibold text-xl">
              Item
            </Text>
            <Text className="color-white text-lg">
              Preço
            </Text>
          </View>
          <View /*Card*/ className="p-5 bg-red-700">
            <Image className="max-w-52 max-h-52 bg-black" 
            source={require("../assets/images/tenis.webp")}/>
            <Text className="color-white font-semibold text-xl">
              Item
            </Text>
            <Text className="color-white text-lg">
              Preço
            </Text>
          </View>
          <View /*Card*/ className="p-5 bg-red-700">
            <Image className="max-w-52 max-h-52 bg-black" 
            source={require("../assets/images/tenis.webp")}/>
            <Text className="color-white font-semibold text-xl">
              Item
            </Text>
            <Text className="color-white text-lg">
              Preço
            </Text>
          </View>
          <View /*Card*/ className="p-5 bg-red-700">
            <Image className="max-w-52 max-h-52 bg-black" 
            source={require("../assets/images/tenis.webp")}/>
            <Text className="color-white font-semibold text-xl">
              Item
            </Text>
            <Text className="color-white text-lg">
              Preço
            </Text>
          </View>
          <View /*Card*/ className="p-5 bg-red-700">
            <Image className="max-w-52 max-h-52 bg-black" 
            source={require("../assets/images/tenis.webp")}/>
            <Text className="color-white font-semibold text-xl">
              Item
            </Text>
            <Text className="color-white text-lg">
              Preço
            </Text>
          </View>
        </View>


        
      </View>
    </ScrollView>
  );
}
