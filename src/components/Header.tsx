import Head from "next/head";
import { FC } from "react";
import { Flex } from "theme-ui";
import { colors } from "../../styles/colors";
import { Title } from "./Title";

export const Header: FC = () => {
    return <Head>
            <Flex sx={{ background: `linear-gradient(to right, ${colors.black}, ${colors['dark-gray']})`, alignItems: 'center', columnGap: '8px', paddingTop: '24px', paddingLeft: '24px'}}>
                <img src='/assets/logo.svg' width={40} height={40}/>
                <Title sx={{ fontSize: '28px'}}>PANDORA CODE</Title>
            </Flex>
        </Head>
}