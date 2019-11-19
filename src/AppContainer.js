import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/HomeScreen'
import PatientRegister from './screens/PatientRegister';
import StartScreen from './screens/StartScreen';


const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions:{
        title:'Home'
      }
    },
    PatientRegister: {
      screen: PatientRegister,
      navigationOptions:{
        title:'Registro de paciente'
      }
    },
    Start:{
      screen:StartScreen,
      navigationOptions:{
        title:'Começar'
      }
    }

  });
  
  export default createAppContainer(AppNavigator);