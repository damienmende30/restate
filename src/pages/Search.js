import Footer from '../components/home/footer/Footer'
import Hero from '../components/home/hero/Hero'
import SearchSection from '../components/search/searchSection/SearchSection'
import SearchResult from '../components/search/searchResult/SearchResult'

const Search = ({forRent}) =>{

    return(
        <div>
           <Hero /> 
           <SearchSection forRent={forRent}/>
           <SearchResult forRent={forRent}/>
           <Footer />
        </div>

    )
}

export default Search