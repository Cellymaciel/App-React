import { Text, View, TextInput , TouchableOpacity , Image} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import styles from './style';

export default function Body(){
    return(
        <View style={styles.container}>

         <View style={styles.searchBox}>
           <Text style={styles.txt}> Cidade :</Text>
            <TextInput style={styles.input} placeholder="Digite O  nome da cidade"/>
           <TouchableOpacity style={styles.btn}>
            <FontAwesome name="glass" size={20} color={"white"}/>
           </TouchableOpacity>
         </View>
        
         <TouchableOpacity>
           <View style={styles.primary}>
                <Text style={styles.txt1} > Clima Principal</Text>
           </View>
         </TouchableOpacity>

        <View style={styles.cont2}>
         <TouchableOpacity>
            <View style={styles.second}>
                <Text style={styles.txt2}>Secundario</Text>
            </View> 
         </TouchableOpacity>

         <TouchableOpacity>
            <View style={styles.third}>
              <Text style={styles.txt3}> Terceiro</Text>
            </View>
         </TouchableOpacity>
         </View>

         <View style={styles.cont3}>
         <TouchableOpacity>
            <View style={styles.for}>
                <Text style={styles.txt4}>Quarto</Text>
            </View> 
         </TouchableOpacity>

         <TouchableOpacity>
            <View style={styles.five}>
                <Text style={styles.txt5}>Quinto</Text>
                <Image style={styles.img} source={require('../images/estrelado.svg')}/>
            </View>
         </TouchableOpacity>
         </View>
        
</View>
    );
    }


