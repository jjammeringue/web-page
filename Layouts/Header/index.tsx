import Link from 'next/link';
import Styled from './headerStyle';
//Meringue
export default function Header(){
    return(
        <Styled.Container>
            <a href='http://localhost:3000/'>
                JJAM 머랭
            </a>
        </Styled.Container>
    )
}