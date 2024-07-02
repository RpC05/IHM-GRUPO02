import Upao from './data/novedades.json'
import '../styles/novedades.css';

const Single = () => {

    const currentRoute = window.location.pathname;
    const upao = Upao.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{upao.name}</h1>
        <hr></hr>
        <img src={upao.picture}></img>
        <p>{upao.description}</p>
    </>);
}

export default Single;