import SearchVariantForm from "../components/searchVariantForm/SearchVariantForm"
import { useParams } from 'react-router-dom';
import "./searchVariantPage.scss";

const SearchVariantPage = () => {
    
  return (
    <div className="SearchVariant">
        <SearchVariantForm/>
    </div>
  )
}

export default SearchVariantPage;