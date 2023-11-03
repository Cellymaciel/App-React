import { Text, View , StyleSheet ,TouchableOpacity} from "react-native";
import styles from './style';


export default function Head(){
    return(
  <View  style={styles.container}>
   <TouchableOpacity>
     <Text style={styles.txt}> PrevisãoTempo.com </Text>
   </TouchableOpacity>       
  </View>
    );
}




