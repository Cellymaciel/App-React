import { Text, View ,StyleSheet} from "react-native";

export default function Footer(){
    return(
        <View style={styles.container}> 
         <Text style={styles.txt}>@Feito Por Marcelly e Diego</Text>
     
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4169E1',
      marginTop:200,
      width:"100%",
      alignItems: 'center',
    },
    txt:{
        textAlign:"center",
        marginTop:15,
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        opacity:0.6,
    },
  });