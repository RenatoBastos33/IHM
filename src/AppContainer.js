import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/HomeScreen'
import PatientRegister from './screens/PatientRegister';
import StartScreen from './screens/StartScreen';
import ResultScreen from './screens/ResultScreen';
import GameSreen from './screens/GameScreen';


const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions:{
        title:'Home',
        headerTintColor:'white',
        headerStyle: {
          backgroundColor: '#0033cc',
        },
      }
    },
    PatientRegister: {
      screen: PatientRegister,
      navigationOptions:{
        title:'Registro de paciente',
        headerTintColor:'white',
        headerStyle: {
          backgroundColor: '#0033cc',
        },
      }
    },
    Start:{
      screen:StartScreen,
      navigationOptions:{
        title:'Começar',
        headerTintColor:'white',
        headerStyle: {
          backgroundColor: '#0033cc',
        },
      }
    },    
    Result:{
      screen:ResultScreen,
      navigationOptions:{
        title:'Resultado',
        headerTintColor:'white',
        headerStyle: {
          backgroundColor: '#0033cc',
        },
      }
    },
    Game:{
      screen:GameSreen
    }

  });
  
  export default createAppContainer(AppNavigator);