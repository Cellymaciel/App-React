import { Text, View, StyleSheet, TextInput , TouchableOpacity } from "react-native";
import {FontAwesome} from "@expo/vector-icons";

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
            </View>
         </TouchableOpacity>
         </View>
        
</View>
    );
} 


const styles = StyleSheet.create({
    container: {
     marginTop:35,
     marginEnd:5,
    
    
    },
    searchBox:{
        flexDirection:"row",
        alignItems:"center",
      

    },
    txt:{
        fontWeight:"bold",
        fontSize:18,
        backgroundColor:"#33415c",
        color:"white",
        padding:8,
        borderTopLeftRadius:10,
        borderBottomLeftRadius: 10,


    },
    input:{
        
        height:40,
        width:188,
        margin:0,
        borderWidth:1,
        borderColor:"#33415c",
        padding:8,
        opacity:0.6,
        
    },


   btn:{
    backgroundColor:"#0466c8",
    padding:10,
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    
   },
   primary:{
    padding:5,
    backgroundColor:"#4682B4",
    alignItems:"center",
    width:310,
    height:120,
    borderRadius:10,
    marginTop:25,
   },
   txt1:{
    color:"white",
    fontWeight:"bold",
    marginTop:30,
    fontSize:25,
   },
   cont2:{
    flexDirection:"row",
    alignItems:"center",
   },
   second:{
    padding:5,
    backgroundColor:"#4682B4",
    alignItems:"center",
    width:150,
    height:100,
    borderRadius:10,
    marginTop:15,
    marginRight:5,
   },
   txt2:{
    color:"white",
    fontWeight:"bold",
    marginTop:25,
    fontSize:25,
   },
   third:{
    padding:5,
    backgroundColor:"#4682B4",
    alignItems:"center",
    width:150,
    height:100,
    borderRadius:10,
    marginTop:15,
   },
   txt3:{
    color:"white",
    fontWeight:"bold",
    marginTop:25,
    fontSize:25,
   },

   cont3:{
    flexDirection:"row",
    alignItems:"center",
   },
   for:{
    padding:5,
    backgroundColor:"#4682B4",
    alignItems:"center",
    width:150,
    height:100,
    borderRadius:10,
    marginTop:15,
    marginRight:5,
   },
   txt4:{
    color:"white",
    fontWeight:"bold",
    marginTop:25,
    fontSize:25,
   },
   five:{
    padding:5,
    backgroundColor:"#4682B4",
    alignItems:"center",
    width:150,
    height:100,
    borderRadius:10,
    marginTop:15,
   },
   txt5:{
    color:"white",
    fontWeight:"bold",
    marginTop:25,
    fontSize:25,
   },
  });