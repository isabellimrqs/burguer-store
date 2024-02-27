import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fca311',
        alignItems:'center',
        justifyContent:'center'
    },
    containerLanche:{
        backgroundColor: 'white',
        width: 310,
        height: 380,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    text:{
        fontSize: 40,
        fontWeight:'bold',
        color: '#fb8500',
        marginBottom: 25
    },
    text2:{
        fontSize: 38,
        fontWeight:'bold',
        color: '#fb8500',
    },
    button:{
        backgroundColor:'#37eb34',
        width:'30%',
        height:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        
    },
    textButton:{
        fontSize: 25,
        fontWeight:'bold',
        
    }
})

export default styles