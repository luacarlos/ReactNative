import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center p-4 bg-white flex-col ">

      <View className="w-full justify-center">
        <View className="flex-row justify-between bg-slate-500 items-center p-3 rounded-3xl">
           
          <View className="flex-row gap-5">
            <Image className="max-w-8 max-h-8"
              source={require('../assets/images/search.png')} 
            />  
           <Text className="text-2xl text-dark-200 font-normal">
            Pesquise na loja            
            </Text>
          </View>
          <Image className="max-w-8 max-h-8"
            source={require('../assets/images/pic.png')} 
            />  
          </View>
      </View>

      
        
      <View className="w-full max-w-md flex-row flex-wrap justify-between">
        <View className="w-[48%] aspect-square bg-gray-100 rounded-lg p-4 mb-4 shadow-md items-center justify-center">
          <Text className="text-lg font-semibold">Produto 1</Text>
          <Text className="text-gray-600 mt-1">R$ 99,99</Text>
        </View>

        <View className="w-[48%] aspect-square bg-gray-100 rounded-lg p-4 mb-4 shadow-md items-center justify-center">
          <Text className="text-lg font-semibold">Produto 2</Text>
          <Text className="text-gray-600 mt-1">R$ 99,99</Text>
        </View>

        <View className="w-[48%] aspect-square bg-gray-100 rounded-lg p-4 mb-4 shadow-md items-center justify-center">
          <Text className="text-lg font-semibold">Produto 3</Text>
          <Text className="text-gray-600 mt-1">R$ 99,99</Text>
        </View>

        <View className="w-[48%] aspect-square bg-gray-100 rounded-lg p-4 mb-4 shadow-md items-center justify-center">
          <Text className="text-lg font-semibold">Produto 4</Text>
          <Text className="text-gray-600 mt-1">R$ 99,99</Text>
        </View>
      </View>
    </View>
  );
}
