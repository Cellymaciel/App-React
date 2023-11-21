import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'
import React, { useState } from 'react'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import styles from './homeStyle'
import stylesClima from './boxesClimasStyle'

import Head from '../head/header'
import Footer from '../footer/footer'

export default function Body() {
  const apiUrl =
    'https://api.hgbrasil.com/weather?format=json-cors&key=af2a2efb&city_name='
  const locationApiUrl =
    'https://api.hgbrasil.com/geoip?format=json-cors&key=af2a2efb&address=remote&precision=false'

  let cityInitial = ''

  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  const handleSearchClick = () => {
    getTodayInfos(city)
  }
  const getTodayInfos = cityName => {
    fetch(apiUrl + cityName)
      .then(response => response.json())
      .then(data => {
        const results = data.results
        setWeatherData(results)
        // changePrincipalInfos(results)
        // changeImg(Number(results.condition_code))
        console.log(JSON.stringify(results, null, 2))
      })
      .catch(error => console.error(error))
  }

  function changePricipalInfos(results) {
    city_result.textContent = results.city
    description.textContent = results.description
    temperature.textContent = results.temp + 'º'
    humidity.textContent = results.humidity + '%'
    windSpeedy.textContent = results.wind_speedy
    sunrise.textContent = results.sunrise
    sunset.textContent = results.sunset
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
            {/* <TouchableOpacity>
              <View style={styles.primary}>
                <Text style={styles.txt1}> Clima Principal</Text>
                {weatherData && (
                  <>
                    <Text>{weatherData.city}</Text>
                    <Text>{weatherData.description}</Text>
                    <Text>{weatherData.description}</Text>
                    <Text>{weatherData.temp}</Text>
                    <Text>{weatherData.wind_speedy}</Text>
                    <Text>{weatherData.sunrise}</Text>
                    <Text>{weatherData.sunset}</Text>
                    {/* Add more elements to display other weather information */}
            {/* </>
                )} */}
            {/* </View> */}
            {/* </TouchableOpacity> */}

            <TouchableOpacity>
              <View style={stylesClima.boxClimaPrincipal}>
                <View style={stylesClima.boxInsideTop}>
                  <Text style={stylesClima.boxTopMessage}>TEMPO AGORA EM</Text>
                  <Text style={stylesClima.boxTopCityName}>
                    {' '}
                    <Entypo name="location-pin" size={25} color="#0466C8" />
                    Curitiba
                  </Text>
                </View>

                <View style={stylesClima.boxInsideMain}>
                  <Image
                    style={stylesClima.boxMainImage}
                    source={require('../images/logo.png')}
                  />
                  <View style={stylesClima.boxMainInfos}>
                    <Text style={stylesClima.boxMainTemp}>10</Text>
                    <Text style={stylesClima.boxMainDesc}>Nublado</Text>
                  </View>
                </View>

                <View style={stylesClima.boxInsideBottom}>
                  <View style={stylesClima.boxBottomOne}>
                    <View style={stylesClima.boxInfo}>
                      <Text style={stylesClima.boxOneText}>Umidade</Text>
                      <Text style={stylesClima.boxOneText}>60%</Text>
                    </View>
                    <View style={stylesClima.boxInfo}>
                      <Text style={stylesClima.boxOneText}>Vento</Text>
                      <Text style={stylesClima.boxOneText}>3.09km/h</Text>
                    </View>
                  </View>

                  <View style={stylesClima.boxBottomTwo}>
                    <View style={stylesClima.boxInfo}>
                      <Text style={stylesClima.boxTwoText}>Nascer do Sol</Text>
                      <Text style={stylesClima.boxTwoText}>05:19 am</Text>
                    </View>
                    <View style={stylesClima.boxInfo}>
                      <Text style={stylesClima.boxTwoText}>Pôr do Sol</Text>
                      <Text style={stylesClima.boxTwoText}>06:46 pm</Text>
                    </View>
                  </View>
                </View>
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
