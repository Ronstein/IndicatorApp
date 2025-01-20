import { indicatorApi } from "../../config";
import { IndicatorValuesResponse } from "../../infrastructure";
import { getDateFormatToday, getDateFormatMinusDays } from "../../utils";

export const getIndicatorInDaysAction = async (indicator: string, numberOfDays: number): Promise<IndicatorValuesResponse[]> => {
    const [d1, m1, y1] = getDateFormatMinusDays(numberOfDays);
    const [d2, m2, y2] = getDateFormatToday();

    try {
        const { data } = await indicatorApi.get<{ [key: string]: { Fecha: string; Valor: string }[] }>(
            `/${indicator}/periodo/${y1}/${m1}/dias_i/${d1}/${y2}/${m2}/dias_f/${d2}`
        );

        const values = Object.values(data)[0];
        return values.map((item) => ({
            fecha: new Date(item.Fecha),
            valor: item.Valor,
        }));
    } catch (error) {
        console.error("Error fetching indicator data:", error);
        throw error;
    }
};