import { useState } from "react"
import { IndicatorValuesResponse } from "../../infrastructure"
import { getIndicatorInDaysAction, getIndicatorInYearAction } from "../../actions";

interface Props {
    indicator: string;
    numberOfDays?: number;
}

export const useIndicator = ({ indicator, numberOfDays = 30 }: Props) => {
    const [indicatorList, setIndicatorList] = useState<IndicatorValuesResponse[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getIndicator = async () => {
        console.log('paso');

        setIsLoading(true);
        if (indicator === 'ipc' || indicator === 'utm') {
            const indicators = await getIndicatorInYearAction(indicator);
            //console.log(indicators);

            setIndicatorList(indicators);
            setIsLoading(false);
            return;
        }

        const indicators = await getIndicatorInDaysAction(indicator, numberOfDays);
        console.log(indicator, indicators);
        setIndicatorList(indicators);
        setIsLoading(false);
    }

    return {
        indicatorList,
        getIndicator,
        isLoading,
    }
}
