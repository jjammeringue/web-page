import Link from 'next/link';
import Styled from './headerStyle';
export default function Header(){
    return(
        <Styled.Container>
            <div>
                <a href='http://localhost:3000'>
                    쨈 Meringue
                </a>
            </div>
            <Styled.menuBar>
                <div style={{paddingRight: '40px'}}>
                    <Link href={""}>
                        Intoduction
                    </Link>
                </div>
                <a style={{paddingRight: '40px'}}>
                    Product
                </a>
                <a>
                    Contact
                </a>
            </Styled.menuBar>
        </Styled.Container>
    )
}