import { createStackNavigator, StackCardStyleInterpolator } from '@react-navigation/stack';
import { HomeScreen, IndicatorDetailScreen, IndicatorValuesScreen } from '../screens';

export type RootStackParams = {
    HomeScreen: undefined;
    IndicatorValuesScreen: { indicator: string };
    IndicatorDetailScreen: { indicator: string, unidadMedida: string };
}

const Stack = createStackNavigator<RootStackParams>();

const fadeAnimation: StackCardStyleInterpolator = ({ current }) => {
    return {
        cardStyle: {
            opacity: current.progress,
        }
    }
}

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                //cardStyleInterpolator: fadeAnimation, //GLobal
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="IndicatorValuesScreen" component={IndicatorValuesScreen} />
            <Stack.Screen name="IndicatorDetailScreen" component={IndicatorDetailScreen} />
        </Stack.Navigator>
    );
}