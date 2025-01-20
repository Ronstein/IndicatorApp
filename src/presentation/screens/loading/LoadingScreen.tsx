import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';

export const LoadingScreen = () => {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} size="large" color={colors.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
});