import { Dimensions, ScrollView, StyleSheet, View } from "react-native"
import { IndicatorValuesResponse } from "../../../infrastructure";
import { LineChart } from "react-native-chart-kit";
import { formatDateToYYYYMMDD } from "../../../utils";

interface Props {
    data: IndicatorValuesResponse[];
}

export const ChartIndicator = ({ data }: Props) => {
    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundGradientFrom: "#f5f5f5",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        propsForDots: {
            r: "5",
            strokeWidth: "2",
            stroke: "#2196f3",
        },
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >

                <LineChart
                    data={{
                        labels: data.map((item) => formatDateToYYYYMMDD(item.fecha)),
                        datasets: [
                            {
                                data: data.map((item) =>
                                    parseFloat(item.valor.replace(",", "."))
                                ),
                            },
                        ],
                    }}
                    width={screenWidth + 50}
                    height={300}
                    chartConfig={chartConfig}
                    bezier
                    style={styles.chart}
                    verticalLabelRotation={30}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 16,
    },
    chart: {
        borderRadius: 8,
    },
});
