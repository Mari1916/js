import { Image, Text, View } from "react-native"
import { styles } from "./style"



export default function Index(){
    return (
     <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.headerImage} source={require("../assets/images/Wecoffee.jpg")} />
            <Text style={styles.coffeeName}>We coffee</Text>
            <Text style={styles.subtitle}>O futuro dos cafés!</Text>
        </View>
     </View>
    )
}

