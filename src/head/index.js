import { Text, View , StyleSheet ,TouchableOpacity} from "react-native";



export default function Head(){
    return(
  <View  style={styles.container}>
   <TouchableOpacity>
     <Text style={styles.txt}> PrevisãoTempo.com </Text>
   </TouchableOpacity>       
  </View>
    );
}


const styles = StyleSheet.create({
    container: {
     backgroundColor:"#4169E1",
     height:150,
     width:"100%", 
    },
    txt:{
      color:"white",
      fontSize:35,
      textAlign:"center",
      fontWeight:"bold",
      marginTop:55,
    }
  });
  

