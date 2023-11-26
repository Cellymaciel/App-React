import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import styles from './homeStyle'
import stylesClima from './boxesClimasStyle'
import { AntDesign } from '@expo/vector-icons'


import Head from '../head/header'
import Footer from '../footer/footer'
import { initDB } from '../services/SQLiteDataBase'
initDB();
import{addFavoritedCity} from '../services/dbCidadesFavoritadas';
import AsyncStorage from '@react-native-async-storage/async-storage';

const handleFavoriteClick = () => {
  if (weatherData) {
    const { city } = weatherData;
    const usuario_id = 1;

    addFavoritedCity(usuario_id, city)
      .then(insertId => {
        console.log(`Cidade favoritada! ID: ${city}`);
        setFavoritedCity(city);
        // Armazenando a cidade favorita no AsyncStorage
        AsyncStorage.setItem('favoritedCity', city)
          .then(() => console.log('Cidade favorita armazenada no AsyncStorage'))
          .catch(error => console.error('Erro ao armazenar cidade favorita:', error));
      })
      .catch(error => {
        console.error('Erro ao favoritar cidade:', error);
      });
  }
};





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
  const [favoritedCity, setFavoritedCity] = useState('');

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
          console.log('LOCALIZAÇÃO:', cityInitial)
          getTodayInfos(cityInitial)
        })
        .catch(error => console.error(error))
    )
  }

  function getUrlSecondaryImg(cod) {
    // Mapeia os códigos meteorológicos para os caminhos das imagens correspondentes
    const imageMap = {
      rain: require('../../assets/imagensClima/chuva-leve.png'),
      storm: require('../../assets/imagensClima/tempestade.png'),
      clear_day: require('../../assets/imagensClima/ensolarado.png'),
      cloud: require('../../assets/imagensClima/parcialmente-nublado.png'),
      cloudly_night: require('../../assets/imagensClima/nublado.png'),
      cloudly_day: require('../../assets/imagensClima/nublado.png'),
      snow: require('../../assets/imagensClima/neve.png'),
      hail: require('../../assets/imagensClima/chuva-granizo.png'),
      clear_night: require('../../assets/imagensClima/noite-limpa.png')
    }

    return imageMap[cod] || DefaultImg
  }


  

  const handleFavoriteClick = () => {
    if (weatherData) {
      const { city } = weatherData;
      const usuario_id = 1;
  
      addFavoritedCity(usuario_id, city)
        .then(insertId => {
          console.log(`Cidade favoritada! ID: ${city}`);
          setFavoritedCity(city);
          // Armazenando a cidade favorita no AsyncStorage
          AsyncStorage.setItem('favoritedCity', city)
            .then(() => {
              console.log('Cidade favorita armazenada no AsyncStorage');
              setFavoritedCity(prevCity => [...prevCity,city])
              // Adicionando a cidade favoritada à lista de favoritos
              const updatedFavoritedCities = [...favoritedCity, city];
              setFavoritedCity(updatedFavoritedCities);
            })
            .catch(error =>
              console.error('Erro ao armazenar cidade favorita:', error)
            );
        })
        .catch(error => {
          console.error('Erro ao favoritar cidade:', error);
        });
    }
  };
  //para executar a api de location qnd a
  useEffect(() => {
    getUserLocation()
    console.log('APP INICIADO')
  }, [])

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {loading && (
          <View style={styles.loadingArea}>
            <ActivityIndicator size="large" color="white" />
            <Text style={styles.loadingText}>Carregando...</Text>
          </View>
        )}
        {!loading && (
          // BARRA DE PESQUISA
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

            {/* CLIMA PRINCIPAL */}
            <SafeAreaView style={styles.climaBoxMain}>
              <View style={styles.boxClimaMain}>
                {weatherData && (
                  <>
                    <View style={stylesClima.boxClimaPrincipal}>
                      <View style={stylesClima.boxInsideTop}>
                        <View style={stylesClima.boxInfosText}>
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
                        <View style={stylesClima.boxStar}>
                          <TouchableOpacity onPress={ () => handleFavoriteClick (weatherData.city)}>
                            <AntDesign name="staro" size={35} color="#EAD02D" />
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={stylesClima.boxInsideMain}>
                        <Image
                          style={stylesClima.boxMainImage}
                          source={getUrlSecondaryImg(
                            weatherData ? weatherData.condition_slug : 'cloud'
                          )}
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
                  </>
                )}

                {nextDaysWeather && (
                  <>
                    <SafeAreaView style={stylesClima.climaBoxSecondary}>
                      {/* SEGUNDO DIA */}

                      <View style={stylesClima.boxeClimaSecondary}>
                        <View style={stylesClima.boxSecImg}>
                          <Image
                            style={stylesClima.boxSecondaryImage}
                            source={getUrlSecondaryImg(
                              nextDaysWeather
                                ? nextDaysWeather[1].condition
                                : 'cloud'
                            )}
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

                      {/* TERCEIRO DIA */}

                      <View style={stylesClima.boxeClimaSecondary}>
                        <View style={stylesClima.boxSecImg}>
                          <Image
                            style={stylesClima.boxSecondaryImage}
                            source={getUrlSecondaryImg(
                              nextDaysWeather
                                ? nextDaysWeather[2].condition
                                : 'cloud'
                            )}
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

                      {/* QUARTO DIA */}

                      <View style={stylesClima.boxeClimaSecondary}>
                        <View style={stylesClima.boxSecImg}>
                          <Image
                            style={stylesClima.boxSecondaryImage}
                            source={getUrlSecondaryImg(
                              nextDaysWeather
                                ? nextDaysWeather[3].condition
                                : 'cloud'
                            )}
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

                      {/* QUINTO DIA */}

                      <View style={stylesClima.boxeClimaSecondary}>
                        <View style={stylesClima.boxSecImg}>
                          <Image
                            style={stylesClima.boxSecondaryImage}
                            source={getUrlSecondaryImg(
                              nextDaysWeather
                                ? nextDaysWeather[4].condition
                                : 'cloud'
                            )}
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
                    </SafeAreaView>
                  </>
                )}
              </View>
            </SafeAreaView>
          </SafeAreaView>
        )}
        <Footer></Footer>
      </SafeAreaView>
    </ScrollView>
  )
}
