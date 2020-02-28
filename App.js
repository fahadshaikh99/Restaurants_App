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
        header : null
    }
}

);


export default createAppContainer(navigator);