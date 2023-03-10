import './HomeScreen.css'
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";

export default function HomeScreen() {

    //1.2 Affichage depuis Home
    return(
        <div className="homeScreen">
        <Nav/>
            <Banner/>
            <Row
                //1.2 lien vers la requete
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies}/>
        </div>
    )
}