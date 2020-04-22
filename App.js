import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './food_src/Screens/SearchScreen';
import ResultShowScreen from './food_src/Screens/ResultShowScreen';


const navigator = createStackNavigator ({

    WelcomeScreen: SearchScreen,
    Results: ResultShowScreen
},
{
    initialRouteName: 'WelcomeScreen',
    defaultNavigationOptions: {
        headerShown: false
    }
}

);

const AppContainer = createAppContainer(navigator);


export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }