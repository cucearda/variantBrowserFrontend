import "./searchVariantForm.scss"

import { useEffect, useState } from "react";
import {useRef} from "react"

const SearchVariantForm = (props) => {

    const regionRef = useRef();
    const chromosomeRef = useRef();
    const geneticRegionRef = useRef();


    const [formData, setFormData] = useState({
        region: "",
        chromosome: "",
      });
    


    const handleSubmit = (e) => 
    {
        e.preventDefault();
        console.log("burdayim");
        const region = regionRef.current.value;
        const chromosome = chromosomeRef.current.value;
        const geneticRegion = geneticRegionRef.current.value;
        console.log(region);
        console.log(chromosome);
        console.log(geneticRegion);
    }


    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>
                        Region:
                        <input type="text"  placeholder="100000-200000" ref={regionRef}/>
                    </label>
                </div>
                <div className="form-field">
                    <label >
                        Chromosome:
                        <input type="text" placeholder="3" ref={chromosomeRef}/>
                    </label>
                </div>
                <div className="form-field">
                    <label>
                        Frequency Lower Limit:
                        <input type="text" placeholder="0.001"/>
                    </label>
                </div>
                <div className="form-field">
                    <label>
                        Genetic Region: 
                        <select name="region" id="region" ref={geneticRegionRef}>
                            <option value={null}>No choice</option>
                            <option value="Intron">Intron</option>
                            <option value="Exon">Exon</option>
                        </select>
                    </label>
                </div>
                <div className="form-field">
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchVariantForm;