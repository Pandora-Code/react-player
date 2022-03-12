import { FC } from "react"
import ReactPlayer from "react-player"
import { Container } from "../../src/components/Container"
import { Header } from "../../src/components/Header"
import screenfull from 'screenfull'

const CreateAcccount: FC = () => {
    const url = 'https://www.youtube.com/watch?v=AuR2tHgy1Y4'

    // if(document) {
    //     const reactPlayerElement = document.getElementById('react-player')
    //     if (screenfull.isEnabled) 
    //         screenfull.request()
    // }
    
    return <Container>
        <Header/>
        <ReactPlayer id='react-player' url={url} controls={true} volume={0.5}/>
    </Container>
}

export default CreateAcccount