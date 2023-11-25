import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import styles from './homeStyle'
import stylesClima from './boxesClimasStyle'

import Head from '../head/header'
import Footer from '../footer/footer'
import { Touchable } from 'react-native'

import ChuvaLeveImg from '../../assets/images/chuva-leve.svg'
import TempestadeImg from '../../assets/images/tempestade.svg'
import TempoLimpoImg from '../../assets/images/ensolarado.svg'
import NubladoImg from '../../assets/images/nublado.svg'
import NeveImg from '../../assets/images/neve.svg'
import GranizoImg from '../../assets/images/chuva-granizo.svg'
import NoiteLimpaImg from '../../assets/images/noite-limpa.svg'
import DefaultImg from '../../assets/images/ensolarado-nuvens.svg'

export default function Body() {
  const apiUrl =
    'https://api.hgbrasil.com/weather?format=json-cors&key=af2a2efb&city_name='
  const locationApiUrl =
    'https://api.hgbrasil.com/geoip?format=json-cors&key=af2a2efb&address=remote&precision=false'

  let cityInitial = ''

  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [nextDaysWeather, setNextDaysWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearchClick = () => {
    getTodayInfos(city)
  }

  const getTodayInfos = cityName => {
    setLoading(true)
    fetch(apiUrl + cityName)
      .then(response => response.json())
      .then(data => {
        const results = data.results
        const nextDaysResults = data.results.forecast
        setWeatherData(results)
        setNextDaysWeather(nextDaysResults)
        setLoading(false)
        console.log(JSON.stringify(results, null, 2))
      })
      .catch(error => console.error(error))
  }

  // pegar a localizacao do usuario
  function getUserLocation() {
    fetch(locationApiUrl).then(response =>
      response
        .json()
        .then(data => {
          const cityInitial = data.results.city
          getTodayInfos(cityInitial)
        })
        .catch(error => console.error(error))
    )
  }

  function getUrlSecondaryImg(cod) {
    // Mapeia os códigos meteorológicos para as imagens correspondentes
    const imageMap = {
      rain: ChuvaLeveImg,
      storm: TempestadeImg,
      clear_day: TempoLimpoImg,
      cloud: NubladoImg,
      cloudly_night: NubladoImg,
      cloudly_day: NubladoImg,
      swno: NeveImg,
      hail: GranizoImg,
      clear_night: NoiteLimpaImg
    }

    // Retorna a imagem correspondente ao código ou a imagem padrão
    return imageMap[cod] || DefaultImg
  }

  //para executar a api de location qnd a
  useEffect(() => {
    getUserLocation()
  }, [])

  let imgClimaPrincipal = getUrlSecondaryImg(
    weatherData ? weatherData.condition_slug : null
  )
  let imgClimaDay2 = getUrlSecondaryImg(
    nextDaysWeather ? nextDaysWeather[1].condition : null
  )
  let imgClimaDay3 = getUrlSecondaryImg(
    nextDaysWeather ? nextDaysWeather[2].condition : null
  )
  let imgClimaDay4 = getUrlSecondaryImg(
    nextDaysWeather ? nextDaysWeather[3].condition : null
  )
  let imgClimaDay5 = getUrlSecondaryImg(
    nextDaysWeather ? nextDaysWeather[4].condition : null
  )

  console.log(imgClimaDay5)

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={styles.loadingArea}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      )}
      {!loading && (
        <SafeAreaView style={styles.containerMain}>
          <Head></Head>
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
              {weatherData && (
                <>
                  <TouchableOpacity>
                    <View style={stylesClima.boxClimaPrincipal}>
                      <View style={stylesClima.boxInsideTop}>
                        <Text style={stylesClima.boxTopMessage}>
                          TEMPO AGORA EM
                        </Text>
                        <Text style={stylesClima.boxTopCityName}>
                          {' '}
                          <Entypo
                            name="location-pin"
                            size={28}
                            color="#0466C8"
                          />
                          {weatherData.city}
                        </Text>
                      </View>

                      <View style={stylesClima.boxInsideMain}>
                        <Image
                          style={stylesClima.boxMainImage}
                          source={{ uri: imgClimaPrincipal }}
                        />
                        <View style={stylesClima.boxMainInfos}>
                          <Text style={stylesClima.boxMainTemp}>
                            {weatherData.temp}º
                          </Text>
                          <Text style={stylesClima.boxMainDesc}>
                            {weatherData.description}
                          </Text>
                        </View>
                      </View>

                      <View style={stylesClima.boxInsideBottom}>
                        <View style={stylesClima.boxBottomInfo}>
                          <View style={stylesClima.boxInfo}>
                            <Text style={stylesClima.boxSmall}>Umidade</Text>
                            <Text style={stylesClima.boxSmall}>
                              {weatherData.humidity}%
                            </Text>
                          </View>
                          <View style={stylesClima.boxInfo}>
                            <Text style={stylesClima.boxSmall}>Vento</Text>
                            <Text style={stylesClima.boxSmall}>
                              {weatherData.wind_speedy}km/h
                            </Text>
                          </View>
                        </View>

                        <View style={stylesClima.boxBottomInfo}>
                          <View style={stylesClima.boxInfo}>
                            <Text style={stylesClima.boxSmall}>
                              Nascer do Sol
                            </Text>
                            <Text style={stylesClima.boxSmall}>
                              {weatherData.sunrise}
                            </Text>
                          </View>
                          <View style={stylesClima.boxInfo}>
                            <Text style={stylesClima.boxSmall}>Pôr do Sol</Text>
                            <Text style={stylesClima.boxSmall}>
                              {weatherData.sunset}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )}

              {nextDaysWeather && (
                <>
                  <SafeAreaView style={stylesClima.climaBoxSecondary}>
                    {/* SEGUNDO DIA */}
                    <TouchableOpacity>
                      <View style={stylesClima.boxeClimaSecondary}>
                        <View style={stylesClima.boxSecImg}>
                          <Image
                            style={stylesClima.boxSecondaryImage}
                            source={{ uri: imgClimaDay2 }}
                          />
                        </View>
                        <View style={stylesClima.boxSecTxt}>
                          <Text style={stylesClima.titleBoxSecondary}>
                            Amanhã - {nextDaysWeather[1].date}
                          </Text>
                          <Text style={stylesClima.tempSecTxt}>
                            Mínima {nextDaysWeather[1].min}º - Máxima {''}
                            {nextDaysWeather[1].max}º
                          </Text>
                          <Text style={stylesClima.descriptionBoxSecondary}>
                            {nextDaysWeather[1].description}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    {/* TERCEIRO DIA */}
                    <TouchableOpacity>
                      <View style={stylesClima.boxeClimaSecondary}>
                        <View style={stylesClima.boxSecImg}>
                          <Image
                            style={stylesClima.boxSecondaryImage}
                            source={{ uri: imgClimaDay3 }}
                          />
                        </View>
                        <View style={stylesClima.boxSecTxt}>
                          <Text style={stylesClima.titleBoxSecondary}>
                            {nextDaysWeather[2].weekday} -{' '}
                            {nextDaysWeather[2].date}
                          </Text>
                          <Text style={stylesClima.tempSecTxt}>
                            Mínima {nextDaysWeather[2].min}º - Máxima {''}
                            {nextDaysWeather[2].max}º
                          </Text>
                          <Text style={stylesClima.descriptionBoxSecondary}>
                            {nextDaysWeather[2].description}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    {/* QUARTO DIA */}
                    <TouchableOpacity>
                      <View style={stylesClima.boxeClimaSecondary}>
                        <View style={stylesClima.boxSecImg}>
                          <Image
                            style={stylesClima.boxSecondaryImage}
                            source={{ uri: imgClimaDay4 }}
                          />
                        </View>
                        <View style={stylesClima.boxSecTxt}>
                          <Text style={stylesClima.titleBoxSecondary}>
                            {nextDaysWeather[3].weekday} -{' '}
                            {nextDaysWeather[3].date}
                          </Text>
                          <Text style={stylesClima.tempSecTxt}>
                            Mínima {nextDaysWeather[3].min}º - Máxima {''}
                            {nextDaysWeather[3].max}º
                          </Text>
                          <Text style={stylesClima.descriptionBoxSecondary}>
                            {nextDaysWeather[3].description}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    {/* QUINTO DIA */}
                    <TouchableOpacity>
                      <View style={stylesClima.boxeClimaSecondary}>
                        <View style={stylesClima.boxSecImg}>
                          <Image
                            style={stylesClima.boxSecondaryImage}
                            source={{ uri: imgClimaDay5 }}
                          />
                        </View>
                        <View style={stylesClima.boxSecTxt}>
                          <Text style={stylesClima.titleBoxSecondary}>
                            {nextDaysWeather[4].weekday} -{' '}
                            {nextDaysWeather[4].date}
                          </Text>
                          <Text style={stylesClima.tempSecTxt}>
                            Mínima {nextDaysWeather[4].min}º - Máxima {''}
                            {nextDaysWeather[4].max}º
                          </Text>
                          <Text style={stylesClima.descriptionBoxSecondary}>
                            {nextDaysWeather[4].description}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </SafeAreaView>
                </>
              )}
            </View>
          </SafeAreaView>
        </SafeAreaView>
      )}

      <Footer></Footer>
    </SafeAreaView>
  )
}
