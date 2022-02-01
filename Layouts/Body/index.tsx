
import Main from '../../pages/Main';

export default function Body(){
    return(
        <>
        <div style={{position: 'absolute', width: '300px', height: '300px',left:'0px',bottom:'0px',background: 'rgba(193, 219, 252, 0.4)'}}/>
        <div style={{position: 'absolute', width: '260px', height: '480px',right:'0px',top:'0px',background: 'rgba(193, 219, 252, 0.4)'}}/>
        <Main />
        </>
    )
}