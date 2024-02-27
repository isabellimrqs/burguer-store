import { View, Text, Pressable, FlatList, Image} from "react-native"
import styles from "./styles"

export default function Products({navigation}){

    const lista = [
        {
            id: 1,
            nome: 'X-Tudo',
            preco: 'R$50,00',
            foto: 'https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/receitas-de-x-tudo.jpg'            
        }, 
        {
            id: 2,
            nome: 'X-Egg',
            preco: 'R$15,00',
            foto: 'https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/x-egg-73519.jpg'
            
        }, 
        {
            id: 3,
            nome: 'X-Frango',
            preco: 'R$20,00',
            foto: 'https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/x-frango-73524.jpg'
        }, 
        {
            id: 4,
            nome: 'X-Bacon',
            preco: 'R$35,00',
            foto: 'https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/Promocao_201604250326298462d3ef9f92300092a34b211e303c1b.jpg'
        }, 
        {
            id: 5,
            nome: 'X-Salada',
            preco: 'R$30,00',
            foto: 'https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/d0416bbddd7e82156eb29941b516e8fd-snack-bar.jpg'
        }
    ]

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Products</Text>
                <FlatList
                data={lista}
                numColumns={2}
                renderItem={({item})=>
                <View style={styles.produto}>
                <Text style={styles.text2}>{item.nome}</Text>
                <Pressable 
                 onPress={()=>navigation.navigate('Product', {
                    lanche: item.nome,
                    valor: item.preco,
                    imagem: item.foto,
                    id: item.id
                 })}

                >
                    <Image source={{uri: item.foto}} style={{width: 90, height: 80}}/>
                </Pressable>
                <Text style={styles.text2}>{item.preco}</Text>
                </View>
                
            } />
        </View>
    )
}