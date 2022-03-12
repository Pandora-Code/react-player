import { FC, useState } from "react"
import ReactPlayer from "react-player"
import { Container } from "../../src/components/Container"
import { Header } from "../../src/components/Header"
import screenfull from 'screenfull'
import { Button } from "../../src/components/Button"
import { Flex } from "theme-ui"

const CreateAcccount: FC = () => {
    const [play, setPlay] = useState(false)
    const [volume, setVolume] = useState(1.0)
    const url = 'https://www.youtube.com/watch?v=AuR2tHgy1Y4'

    // if(document) {
    //     const reactPlayerElement = document.getElementById('react-player')
    //     if (screenfull.isEnabled) 
    //         screenfull.request()
    // }
    const pauseAndPlay = () =>  setPlay(!play)
    const volumePlus = () => {
        if(volume < 1) setVolume(volume+0.1)
    }

    const volumeMinus = () => {
        if(volume > 0) setVolume(volume-0.1)
    }
    
    return <Container>
        <Header/>
        <Flex sx={{ flexDirection: 'column',  rowGap: '16px'}}>
        <ReactPlayer 
            id='react-player'
            url={url}
            playing={play} 
            controls={true} 
            volume={volume}
        />
        <Flex sx={{justifyContent: 'space-between'}}>
            <Button onClick={pauseAndPlay}>{play ? 'pause' : 'play'}</Button>
            <Button onClick={volumePlus}>+</Button>
            <Button onClick={volumeMinus}>-</Button>
        </Flex>
        </Flex>
    </Container>
}

export default CreateAcccount