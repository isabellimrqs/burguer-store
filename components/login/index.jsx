import React,{useState} from "react"
import { View, Text, Pressable, TextInput, Alert } from "react-native"
import styles from "./styles"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig";

export default function Login({navigation}) {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const auth = getAuth(app);
    
    function logar(){      
        signInWithEmailAndPassword(auth, user, pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.navigate('Home')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });


    }

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.text}>Login</Text>
            </View>

            <View style={styles.caixaX}>
                <TextInput
                    style={styles.caixa}
                    placeholder="User"
                    value={user}
                    onChangeText={setUser}
                />
            </View>

            <View style={styles.caixaX}>
                <TextInput
                    style={styles.caixa}
                    placeholder="Password"
                    value={pass}
                    onChangeText={setPass}
                    secureTextEntry={true}
                />
            </View>


            <View style={styles.caixaX}>
                <Pressable
                    style={styles.button}
                    onPress={()=>logar()}
                >
                    <Text style={styles.textButton}>Ok</Text>
                </Pressable>
            </View>

        </View>

    )
}