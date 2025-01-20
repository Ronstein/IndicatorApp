import { indicatorApi } from "../../config";
import { IndicatorValuesResponse } from "../../infrastructure";

export const getIndicatorInYearAction = async (indicator: string): Promise<IndicatorValuesResponse[]> => {
    const year = new Date().getFullYear() - 1;

    try {
        const { data } = await indicatorApi.get<{ [key: string]: { Fecha: string; Valor: string }[] }>(
            `/${indicator}/${year}`
        );

        // Transformar los datos eliminando la clave adicional
        const values = Object.values(data)[0]; // Obtiene el array ignorando la clave
        return values.map((item) => ({
            fecha: new Date(item.Fecha),
            valor: item.Valor,
        }));
    } catch (error) {
        console.error("Error fetching indicator data:", error);
        throw error;
    }
};