import { IndicatorCard } from "..";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation";
import { List } from "react-native-paper";
import { Indicator } from "../../../infrastructure";

export const IndicatorList = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const indicators: Indicator[] = [
        { id: 'dolar', title: 'Dólar', valueType: 'Pesos', },
        { id: 'euro', title: 'Euro', valueType: 'Pesos', },
        { id: 'ipc', title: 'IPC', valueType: 'Porcentaje', },
        { id: 'uf', title: 'UF', valueType: 'Pesos', },
        { id: 'utm', title: 'UTM', valueType: 'Pesos', },
    ];

    const handlePressValue = (indicator: Indicator) => {
        navigation.navigate('IndicatorValuesScreen', { indicator: indicator.id });
    };

    const handlePressIcon = (indicator: Indicator) => {
        navigation.navigate('IndicatorDetailScreen', { indicator: indicator.id, unidadMedida: indicator.valueType });
    };

    return (
        <List.Section
            style={{
                marginTop: 2,
            }}
        >
            {
                indicators.map((item, index) => (
                    <IndicatorCard
                        key={index}
                        title={item.title}
                        valueType={item.valueType}
                        onPressValue={() => handlePressValue(item)}
                        onPressIcon={() => handlePressIcon(item)}
                    />
                ))
            }
        </List.Section>
    );
};