import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import requests from '../Requests'
import Row from '../row'
import Footer from '../components/Footer'
 

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Navbar></Navbar>
      <Banner></Banner>
      
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
      
      <Footer></Footer>
    </div>
  )
}

export default HomeScreen