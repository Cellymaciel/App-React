import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import styles from './homeStyle'

import Head from '../head/header'
import Footer from '../footer/footer'

export default function Body() {
  const apiUrl =
    'https://api.hgbrasil.com/weather?format=json-cors&key=af2a2efb&city_name='
  const locationApiUrl =
    'https://api.hgbrasil.com/geoip?format=json-cors&key=af2a2efb&address=remote&precision=false'

  let cityInitial = ''

  const [city, setCity] = useState('')

  const handleSearchClick = () => {
    getTodayInfos(city)
  }
  const getTodayInfos = cityName => {
    fetch(apiUrl + cityName)
      .then(response => response.json())
      .then(data => {
        const results = data.results
        // setWeatherData(results)
        // changePrincipalInfos(results)
        // changeImg(Number(results.condition_code))
        console.log(JSON.stringify(results, null, 2))
      })
      .catch(error => console.error(error))
  }

  1
  return (
    <SafeAreaView style={styles.container}>
      <Head></Head>
      <SafeAreaView style={styles.containerMain}>
        <View style={styles.searchBox}>
          <Text style={styles.txt}> Cidade :</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome da cidade"
            value={city}
            onChangeText={text => setCity(text)}
          />
          <TouchableOpacity style={styles.btn} onPress={handleSearchClick}>
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
