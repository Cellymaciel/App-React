import { Text, View, TouchableOpacity , Image} from "react-native";
import styles from "./style";



export default function User(){
   
    return(
    <View style={styles.container}>
        <TouchableOpacity>
        <Text> Bom dia</Text>
        <Text>so pra subir</Text>
        </TouchableOpacity>
    </View>

    );
};