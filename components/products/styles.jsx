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
        color: 'white',
        marginTop: 25
    },
    text2:{
        fontSize: 15,
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
        
    },
    produto: {
        width: 150,
        height: 150,
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        alignItems: 'center'
    }
})

export default styles