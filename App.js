import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground} from 'react-native';
import {FontAwesome} from "@fortawesome/free-solid-svg-icons"
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { BackgroundCarousel } from './data/BackgroundCarousel';
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";
const images = [
  'https://motionleague.app/img/ciclista.png',
  'https://motionleague.app/img/runner.png',
  'https://motionleague.app/img/futbol.png',

];

function HomeScreen({navigation}){
  return (
     
    <View style={styles.container}>
  
          <Image
            source={{uri: 'https://motionleague.app/img/Motion-League-Logo.png'}}
            style={styles.logo}
          />
          
          
          <BackgroundCarousel images={images}/>


      <View style={styles.container5}>
      <TouchableOpacity title="Entrar" style={styles.button} 
          onPress={() => navigation.navigate('Signup')}
        ><Text style={styles.btntext}>Únete</Text></TouchableOpacity>
       
        <TouchableOpacity title="Únete" style={styles.button2}
          onPress={() => navigation.navigate('Login')}
        ><Text style={styles.btntext}>Entrar</Text></TouchableOpacity>
      </View>
    </View>
  )
}

function LoginScreen({navigation}){
  return (
    <View style={styles.container}>
    <Image
      source={{uri: 'https://motionleague.app/img/Motion-League-Logo.png'}}
      style={styles.logo}
    />

      <TextInput  style={styles.input}
      placeholderTextColor="white"
       placeholder="email adress"
        keyboardType="email-address"
   />

     <TextInput  style={styles.input}
     placeholderTextColor="white"
       placeholder="Password"
        keyboardType="default"
    />

  <View style={styles.container5}>

  <TouchableOpacity title="Entrar" style={styles.button3}
              onPress={() => navigation.navigate('Profile')}
      ><Text style={styles.btntext2}>Entrar</Text></TouchableOpacity>

        <TouchableOpacity title="Atrás" style={styles.button2}
          onPress={() => navigation.navigate('Home')}
      ><Text style={styles.btntext}>Atrás</Text></TouchableOpacity>
    </View>
  </View>

  )
}

function ExperienceScreen({navigation}){
  return (
  <ImageBackground source={require('./data//efectos-positivos_1410x740_crop_center.jpg')}
    style={styles.container4}>
    <View style={styles.inner2}>

      <Text style={styles.title}>FIRST HELP US PREPARE YOUR EXPERIENCE</Text>
       
      <TouchableOpacity style={styles.button2} title="Continue"
          onPress={() => navigation.navigate('Gender')}
        ><Text style={styles.btntext}>Continue</Text></TouchableOpacity>
    </View>
  </ImageBackground>
  )
}

function GenderScreen({navigation}){
  return (
  <ImageBackground source={require('./data//efectos-positivos_1410x740_crop_center.jpg')}
    style={styles.container4}>

    <View style={styles.inner2}>


      <Text style={styles.title}>YOUR GENDER IS</Text>
      <TouchableOpacity title="Entrar" style={styles.button} 
        ><Text style={styles.btntext}>Man</Text></TouchableOpacity>

      <TouchableOpacity title="Entrar" style={styles.button} 
        ><Text style={styles.btntext}>Woman</Text></TouchableOpacity>

      <TouchableOpacity title="Entrar" style={styles.button} 
        ><Text style={styles.btntext}>Set later</Text></TouchableOpacity>


      <Text style={styles.title}>YOUR FAVORITE SPORT</Text>
      <TouchableOpacity title="Entrar" style={styles.button} 
        ><Text style={styles.btntext}>Crossfit</Text></TouchableOpacity>

      <TouchableOpacity title="Entrar" style={styles.button} 
        ><Text style={styles.btntext}>MTB</Text></TouchableOpacity>

      <TouchableOpacity title="Entrar" style={styles.button} 
        ><Text style={styles.btntext}>Running</Text></TouchableOpacity>

      <TouchableOpacity style={styles.button2}
          onPress={() => navigation.navigate('Profile')}
        ><Text style={styles.btntext}>Continue</Text></TouchableOpacity>
    </View>
  </ImageBackground>
  )
}

function ProfileScreen({navigation}){
  return (
    <ImageBackground source={require('./data/andoninevado.jpeg')}
    style={styles.container4}>
    <View style={styles.inner}>

    <View style={styles.container6}>
      <Text style={styles.title1}>Andoni Resendiz</Text>
      <Image
      style={{width: 50, height: 50}}
      source={require('./data/andoni foto.png')} />
    </View>

      <Text style={styles.title2}>DONIRJ</Text>

      <Text style={styles.title1}>Favorite sport</Text>
      <TextInput 
        style={styles.title1}
        placeholder="Your favorite sport"
        keyboardType="default"
    />

    <TouchableOpacity title="Home" style={styles.button3} 
        onPress={() => navigation.navigate('Home')}
    ><Text style={styles.btntext2}>Home</Text></TouchableOpacity>

  </View>
    </ImageBackground>
  )
}


function SignupScreen({navigation}){
  return (
  <View style={styles.container3}>

    <Image
      source={{uri: 'https://motionleague.app/img/Motion-League-Logo.png'}}
      style={styles.logo}
    />

  <Text style={styles.title3}>ÚNETE A LA LIGA DEL MOVIMIENTO</Text>
  <Text style={styles.title3} >Crea tu cuenta y empieza a romper tus límites</Text>
  <TextInput 
      style={styles.input2}
       placeholder="email adress"
        keyboardType="email-address"
        placeholderTextColor="white"

   />
     <TextInput 
     style={styles.input2}
       placeholder="Password"
        keyboardType="default"
        placeholderTextColor="white"

   />
     <TextInput 
     style={styles.input2}
       placeholder="Confirm password"
        keyboardType="default"
        placeholderTextColor="white"

   />
     <TextInput 
     style={styles.input2}
       placeholder="First name"
        keyboardType="default"
        placeholderTextColor="white"

   />
        <TextInput 
        style={styles.input2}
       placeholder="Last name"
        keyboardType="default"
        placeholderTextColor="white"

   />

  <Text style={styles.subtitle3}>Registra tu fecha de nacimiento para recibir un regalo de todos tus cumpleaños</Text>
  <TextInput style={styles.input2}
       placeholder="DD/MM/YYYY"
        keyboardType="numeric"
        placeholderTextColor="white"

   />

  <View style={styles.container5}>

  <TouchableOpacity title="Únete" style={styles.button3}
        onPress={() => navigation.navigate('Experience')}
    ><Text style={styles.btntext2}>Únete</Text></TouchableOpacity>

    <TouchableOpacity title="Atrás" style={styles.button2}
        onPress={() => navigation.navigate('Home')}
    ><Text style={styles.btntext}>Atrás</Text></TouchableOpacity>
    </View>
  </View>
  )
}

const Stack = createStackNavigator()

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTransparent: true,  headerShown: false}} initialRouteName="Home">
          <Stack.Screen  name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Experience" component={ExperienceScreen} />
          <Stack.Screen name="Gender" component={GenderScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#b497d3',
  },
  btntext: {
    color: 'black',
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold'
  },
  btntext2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    width: 125,
    borderRadius: 30,
    margin: 10,
    height: 52
    
  },
  button2: {
    backgroundColor: 'white',
    opacity: 0.6,
    padding: 10,
    width: 125,
    borderRadius: 30,
    margin: 10,
    height: 52
  },
  button3: {
    backgroundColor: 'black',
    padding: 10,
    width: 125,
    borderRadius: 30,
    margin: 10,
    height: 52
  },
  input: {
    height: 40,
    margin: 25,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderRadius: 10,
    borderRadius: 10,
    width: 300
  },

  container2: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'black',
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderRadius: 10,
    width: 300
  },

  container3: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#b497d3',
  },
  title3: {fontSize: 22, color: '#fff', width: 355, textAlign: 'center'},
  subtitle3: {fontSize: 17, color: '#fff',  textAlign: 'center'},
  TextInput3: {
    color: 'white'
  },
  container4: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inner: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, .7)',
    justifyContent: 'center', 
   
  },
  inner2: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.8,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  title1: {fontSize: 30, color: 'black'},
  title2: {fontSize: 40, color: 'black'},
  container5: {
    
    flexDirection: 'row' 
  },
  container6: {
    flexDirection: 'row',
  
  },
  title: {fontSize: 30, color: '#fff', textAlign: 'center'},
  logo: {height: 100, width: 100, margin: 5,},
  image: {height: 200, width: 200}, 

});

export default App;