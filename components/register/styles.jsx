import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fca311',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize: 40,
        fontWeight:'bold',
        color: 'white'
    },
    caixa:{
        width:'70%',
        height: 50,
        backgroundColor:'white',
        borderRadius: 10,
        fontSize:25,
        padding:10,
        color: '#aaa',
        outlineStyle: 'none'
    },

    caixaX:{
        width: '100%',
        alignItems: 'center',
        justifyContent:'center',
        height:50,
        marginTop:20,
        outlineStyle: 'none'
    },
    button:{
        backgroundColor:'#e85d04',
        width:'30%',
        height:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        
    },
    textButton:{
        fontSize: 25,
        fontWeight:'bold',
        color: 'white'
        
    }
})


export default styles