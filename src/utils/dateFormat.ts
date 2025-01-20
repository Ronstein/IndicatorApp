export const getDateFormatMinusDays = (days: number): [string, string, string] => {
    const today = new Date();
    today.setDate(today.getDate() - days);

    const d1 = String(today.getDate()).padStart(2, '0');
    const m1 = String(today.getMonth() + 1).padStart(2, '0');
    const y1 = String(today.getFullYear());

    return [d1, m1, y1];
};

export const getDateFormatToday = (): [string, string, string] => {
    const today = new Date();
    today.setDate(today.getDate());

    const d2 = String(today.getDate()).padStart(2, '0');
    const m2 = String(today.getMonth() + 1).padStart(2, '0');
    const y2 = String(today.getFullYear());

    return [d2, m2, y2];
};

export const formatDateToYYYYMMDD = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por lo que sumamos 1
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};