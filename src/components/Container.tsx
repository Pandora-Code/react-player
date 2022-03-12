import { FC } from "react";
import { Flex, FlexProps } from "theme-ui";
import { colors } from "../../styles/colors";

export const Container: FC<FlexProps> = ({children}) => {
    return  <Flex
    sx={{
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
      background: `linear-gradient(to right, ${colors.black}, ${colors['dark-gray']})`,
      alignItems: 'center',
      justifyContent: 'center',
    }}
>{children}</Flex>
}

