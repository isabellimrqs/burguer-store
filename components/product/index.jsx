import { View, Text, Pressable, Image } from "react-native"
import styles from "./styles"

export default function Product({navigation, route}){

    const {id, valor, imagem, lanche} = route.params

    return(
        <View style={styles.container}>
            
            <View style={styles.containerLanche}>
            <Text style={styles.text}>{lanche}</Text>
            <Image source={{uri:imagem}} style={{width: 150, height: 150}}></Image>
            <Text style={styles.text2}>{valor}</Text>
            </View>
        

        </View>
    )
}