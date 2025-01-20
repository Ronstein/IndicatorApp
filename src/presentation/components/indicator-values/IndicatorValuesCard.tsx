import React from "react";
import { View, StyleSheet } from "react-native";
import { IndicatorValuesResponse } from "../../../infrastructure";
import { Text, useTheme } from "react-native-paper";
import { formatDateToYYYYMMDD } from "../../../utils";

interface Props {
    indicator: IndicatorValuesResponse;
    indicatorType: string;
}

export const IndicatorValuesCard = ({ indicator, indicatorType }: Props) => {
    const { colors } = useTheme();
    return (
        <View style={styles.card}>
            <Text style={[styles.date, { color: colors.primary }]}>{formatDateToYYYYMMDD(indicator.fecha)}</Text>
            <Text style={styles.value}>{indicatorType === 'ipc' ? `${indicator.valor} %` : `$ ${indicator.valor}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    date: {
        fontSize: 16,
        fontWeight: 'semibold',
    },
    value: {
        fontSize: 16,
        color: "#555",
        fontWeight: "bold",
    },
});