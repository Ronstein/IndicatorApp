import { StackScreenProps } from "@react-navigation/stack"
import { ScrollView, Text, View } from "react-native"
import { RootStackParams } from "../../navigation"
import { useEffect, useRef } from "react";
import { useIndicator } from "../../hooks";
import { LoadingScreen } from "../loading/LoadingScreen";
import { MainLayout } from "../../layout";
import { IndicatorValuesList } from "../../components";

interface Props extends StackScreenProps<RootStackParams, 'IndicatorValuesScreen'> { }

export const IndicatorValuesScreen = ({ route }: Props) => {

    const indicatorRef = useRef(route.params.indicator);
    //console.log(indicatorRef);


    return (
        <MainLayout
            title={indicatorRef.current}
            subTitle={`Indicador: ${indicatorRef.current}`}
        >
            <ScrollView style={{ flex: 1 }}>
                <IndicatorValuesList indicator={indicatorRef.current} />
            </ScrollView>
        </MainLayout>
    )
}
