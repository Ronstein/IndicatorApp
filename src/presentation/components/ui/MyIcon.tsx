import Icon from 'react-native-vector-icons/Ionicons';

import { useTheme } from 'react-native-paper';

interface Props {
    name: string;
    size?: number;
    color?: string;
    white?: boolean;
}

export const MyIcon = ({ name, color, white = false, size = 25 }: Props) => {
    const theme = useTheme();

    if (white) {
        color = theme.colors.onSurface; // Usa `onSurface` como un ejemplo de color claro
    } else if (!color) {
        color = theme.colors.primary; // Color por defecto si no se especifica
    } else {
        color = color; // Usa el color proporcionado directamente
    }
    return (
        <Icon
            color={color}
            name={name}
            size={size}
        />
    )
}
