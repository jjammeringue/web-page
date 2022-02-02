
import Main from '../../pages/Main';
import Styled from './bodyStyle';
import {FaDiscord, FaMailBulk, FaPhoneAlt} from 'react-icons/fa'

export default function Body(){
    return(
        <>
        <Styled.Container>
            <Styled.leftBottomBlock>
                <div>
                    <FaDiscord size={'30'} style={{margin:'20px'}}/>
                    <FaMailBulk size={'30'} style={{margin:'20px'}}/>
                    <FaPhoneAlt size={'30'} style={{margin:'20px'}}/>
                </div>
            </Styled.leftBottomBlock>
            <Styled.rightBlock>
                01/01
            </Styled.rightBlock>
            <Main />
        </Styled.Container>
        </>
    )
}