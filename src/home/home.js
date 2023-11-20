import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styles from './homeStyle'

import Head from '../head/header'
import Footer from '../footer/footer'

export default function Body() {
  return (
    <SafeAreaView style={styles.container}>
      <Head></Head>
      <SafeAreaView style={styles.containerMain}>
        <View style={styles.searchBox}>
          <Text style={styles.txt}> Cidade :</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome da cidade"
          />
          <TouchableOpacity style={styles.btn}>
            <FontAwesome name="search" size={20} color={'white'} />
          </TouchableOpacity>
        </View>

        <SafeAreaView style={styles.climaBoxMain}>
          <View style={styles.boxClimaMain}>
            <TouchableOpacity>
              <View style={styles.primary}>
                <Text style={styles.txt1}> Clima Principal</Text>
              </View>
            </TouchableOpacity>
          </View>

          <SafeAreaView style={styles.climaBoxSecondary}>
            <View style={styles.cont2}>
              <TouchableOpacity>
                <View style={styles.second}>
                  <Text style={styles.txt2}>Secundario</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.third}>
                  <Text style={styles.txt3}>Terceiro</Text>
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
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
      <Footer></Footer>
    </SafeAreaView>
  )
}
