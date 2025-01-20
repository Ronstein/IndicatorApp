import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Divider } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import { MyIcon } from '../components';
import { Text } from 'react-native-gesture-handler';


interface Props {
    title: string;
    subTitle?: string;
    rightAction?: () => void;
    rightActionIcon?: string;
    children?: React.ReactNode;
}

export const MainLayout = ({
    title,
    subTitle,
    rightAction,
    rightActionIcon,
    children,
}: Props) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container]}>
            <Appbar.Header style={styles.appbar}
            >
                {navigation.canGoBack() && (
                    // <Appbar.BackAction iconColor={colors.primary} onPress={navigation.goBack}
                    // />
                    <Appbar.Action
                        icon={() => (<MyIcon name='arrow-back-outline' />
                        )}
                        onPress={navigation.goBack}
                    />
                )}
                <Appbar.Content style={styles.title} title={title} subtitle={subTitle} />
                {rightAction && rightActionIcon && (
                    <Appbar.Action
                        icon={() => <MyIcon name={rightActionIcon} />}
                        onPress={rightAction}
                    />
                )}
            </Appbar.Header>
            <Divider />
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
    },
    appbar: {
        // Ajusta los estilos según el diseño
        //backgroundColor: '#6200ea',
    },
    content: {
        height: '100%',
    },
    title: {
        alignItems: 'center',
    },
});