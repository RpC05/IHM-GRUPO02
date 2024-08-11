import Phones from './data/novedades.json'
import '../styles/novedades.css';

const Single = () => {

    const currentRoute = window.location.pathname;
    const phones = Phones.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{phones.name}</h1>
        <hr></hr>
        <img src={phones.picture}></img>
        <p>{phones.description}</p>
    </>);
}

export default Single;