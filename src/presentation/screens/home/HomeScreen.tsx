
import { IndicatorList } from "../../components";
import { MainLayout } from "../../layout";

export const HomeScreen = () => {

    return (
        <>
            <MainLayout title={'Indicadores - App'}
                subTitle='Aplicación de finanzas'
            >
                <IndicatorList />
            </MainLayout>
        </>
    )
}
