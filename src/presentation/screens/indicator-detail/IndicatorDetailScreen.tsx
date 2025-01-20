import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Text, Title, useTheme } from "react-native-paper";
import { ChartIndicator } from "../../components";
import { MainLayout } from "../../layout";
import { useEffect } from "react";
import { useIndicator } from "../../hooks";
import { formatDateToYYYYMMDD } from "../../../utils";

interface Props extends StackScreenProps<RootStackParams, "IndicatorDetailScreen"> { }

export const IndicatorDetailScreen = ({ route }: Props) => {
    const { indicator, unidadMedida } = route.params;
    const { colors } = useTheme();

    const { indicatorList, getIndicator, isLoading } = useIndicator({ indicator, numberOfDays: 10 });

    useEffect(() => {
        //if (indicator) {
        getIndicator();
        //}
    }, []);

    if (isLoading || !indicatorList || indicatorList.length === 0) {
        return (<MainLayout title="Cargando..." />)
    }
    //console.log(indicatorList);

    const latestData = indicatorList[indicatorList.length - 1];

    return (
        <MainLayout
            title={indicator}
            subTitle={`Indicador: ${indicator}`}
        >
            <ScrollView style={styles.container}>
                <Card style={styles.detailCard}>
                    <Card.Content>
                        <Title style={[styles.title, { color: colors.primary }]}>{indicator !== 'ipc' ? `$${latestData.valor}` : `${latestData.valor}%`}</Title>

                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Indicador:</Text>
                            <Text style={styles.value}>{indicator}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Fecha:</Text>
                            <Text style={styles.value}>{formatDateToYYYYMMDD(latestData.fecha)}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Unidad de medida:</Text>
                            <Text style={styles.value}>{unidadMedida}</Text>
                        </View>
                    </Card.Content>
                </Card>

                {/* Gráfico */}
                <ChartIndicator data={indicatorList} />
            </ScrollView>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,

    },
    detailCard: {
        marginBottom: 16,
        backgroundColor: "#fff",
    },
    detailRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
    },
    value: {
        fontSize: 16,
        fontWeight: 'semibold',
    },
});