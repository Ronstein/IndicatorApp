import { StyleSheet, View } from "react-native"
import { Card, IconButton, useTheme, Text } from "react-native-paper";
import { MyIcon } from "..";

interface Props {
    title: string;
    valueType: 'Pesos' | 'Porcentaje'; // Especificamos los valores posibles para valueType
    onPressValue: () => void;
    onPressIcon: () => void;
}

export const IndicatorCard = ({
    title,
    valueType,
    onPressValue,
    onPressIcon,
}: Props) => {
    const { colors } = useTheme();
    return (
        <Card style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.left}>
                    <Text style={styles.title} onPress={onPressValue}>{title}</Text>
                </View>
                <View style={styles.right}>

                    <IconButton
                        icon={() => <MyIcon name='information-circle-outline' size={25} />}
                        onPress={onPressIcon}
                    />
                </View>
            </View>
            <View>
                <Text style={[styles.value, { color: colors.primary }]}>{valueType}</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 5,
        margin: 5
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //paddingVertical: 10,
        margin: 5
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 14,
        margin: 5,
    },

});

