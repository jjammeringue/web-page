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
                <a style={{paddingRight: '40px'}}>
                    Intoduction
                </a>
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