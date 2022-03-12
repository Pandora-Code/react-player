import { FC } from "react"
import { Flex, Input as InputTheme ,InputProps as InputPropsTheme, Text } from "theme-ui"
import { colors } from "../../styles/colors"

interface InputProps extends InputPropsTheme {
    label: string,
    errorMessage?: string,

}
export const Input: FC<InputProps> = ({label, errorMessage, ...props}) => {
    return( <Flex sx={{ flexDirection: 'column',rowGap: '4px', paddingTop: '8px'}}>
    <Text sx={{ 
        color: colors.white,  
        fontFamily: 'sans-serif',
        fontSize: '14px'
    }}>{label}</Text>
    <InputTheme sx={{ backgroundColor: colors["dark-gray"], borderColor: colors["dark-gray"], color: colors.white}} {...props}/>
    <Text sx={{ 
        color: colors.red,  
        fontFamily: 'sans-serif',
        fontSize: '10px'
    }}>* {errorMessage}</Text>
</Flex>)
}