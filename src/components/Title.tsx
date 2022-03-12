import { FC, ReactNode } from "react";
import { Text, TextProps as TextPropsTheme } from "theme-ui";
import { colors } from "../../styles/colors";

interface TextProps extends TextPropsTheme {
    type?: string
}

export const Title: FC<TextProps> = ({type, sx, children}) => {
    if (type === 'secondary') {
        return <Text 
        sx={{ 
            color: colors.white, 
            fontFamily: 'sans-serif', 
            fontSize: '24px',
            ...sx,
        }} >
            {children}
        </Text>
    }
    return <Text 
        sx={{ 
            color: colors.pink, 
            fontFamily: 'sans-serif', 
            fontWeight: 'bold',
            fontSize: ['36px','48px','62px'],
            ...sx
        }} >
            {children}
        </Text>
}