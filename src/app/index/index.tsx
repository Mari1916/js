import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated"



export default function Index(){
    return (
     <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.headerImage} source={require("../assets/images/Wecoffee.jpg")} />
            <Text style={styles.coffeeName}>We coffee</Text>
            <Text style={styles.subtitle}>O futuro dos cafés!</Text>
        </View>
        <View>
            {["Combos", "Fraputtinos", "Bebidas quentes", "Lanches"].map((item) => (
                <TouchableOpacity>
                    <Text style={styles.tabsName}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
        <ScrollView style={styles.menuItem}>
            {
                MENU.map((item) => (
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuContent}>
                            <Text>{item.name}</Text>
                            <Text>{item.description}</Text>
                            <Text>{item.price.toFixed(2)}</Text>
                        </View>
                        <Image style={styles.itemmage} source={item.image}/>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
     </View>
    )
}

