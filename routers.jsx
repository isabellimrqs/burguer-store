import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from "./components/login"
import Home from "./components/home"
import Products from "./components/products"
import Product from "./components/product"
import { Feather } from "@expo/vector-icons"

const Pilha = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                backgroundColor: '#e85d04',
                paddingBottom: 1,
                paddingTop: 1,
                borderTopColor: 'transparent'
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#555'
        }}
        >
           
            
            
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({size, color})=>(
                    <Feather
                    name="home"
                    size={size}
                    color={color}
                    />
                )
            }}      
            
            />
            <Tab.Screen
            name="Products"
            component={Products}
            options={{
                headerShown: false,
                tabBarIcon: ({size, color})=>(
                    <Feather
                    name="shopping-cart"
                    size={size}
                    color={color}
                    />
                )
            }}      
            
            />
        </Tab.Navigator>
       
    )
}

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Products"
                    component={Products}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Product"
                    component={Product}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}