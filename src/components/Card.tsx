import { FC } from "react";
import { Flex } from "theme-ui";

export const Card: FC = ({children}) => {
    return <Flex sx={{width: ['90vw','50vw'], maxWidth: '400px',backgroundColor: '#282828', borderRadius: '8px',  justifyContent: 'center', padding: '24px'}}>
                <Flex sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  rowGap: '24px'}}>
                    {children}
                </Flex>
            </Flex>
}