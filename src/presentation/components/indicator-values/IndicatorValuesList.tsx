import { IndicatorValuesCard } from "./IndicatorValuesCard";
import { List } from "react-native-paper";
import { useIndicator } from "../../hooks";
import { useEffect } from "react";
import { LoadingScreen } from "../../screens";
import { View } from "react-native";

interface Props {
    indicator: string;
}

export const IndicatorValuesList = ({ indicator }: Props) => {

    const { indicatorList, getIndicator, isLoading } = useIndicator({ indicator });
    //console.log(indicator);

    useEffect(() => {
        getIndicator();
    }, []);


    if (!indicatorList || isLoading) return <LoadingScreen />

    return (
        <List.Section>
            {
                indicatorList.map((item, index) => (
                    <IndicatorValuesCard key={index} indicator={item} indicatorType={indicator} />
                ))
            }
            <View style={{ height: 150 }} />
        </List.Section>
    );
};