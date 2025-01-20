import './gesture-handler';

import { NavigationContainer } from "@react-navigation/native"
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { DefaultTheme, PaperProvider, Surface } from 'react-native-paper';

const theme = {
    ...DefaultTheme, // Extender el tema predeterminado
    colors: {
        ...DefaultTheme.colors,
        primary: '#0A74DA', // Azul oscuro
        accent: '#0D47A1', // Otro color si necesitas personalizar el color secundario,
        //background: "#000000", // Fondo blanco para toda la aplicación
    },
};

export const IndicatorApp = () => {
    return (
        <PaperProvider

            theme={theme}
        >
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </PaperProvider>
    )
}
