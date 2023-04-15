import axios from 'axios'



export interface fetchApiProps {
  name: {
    official: string;
    common: string;
  };
  capital: string;
  flags: {
    alt: string;
    svg: string;
  };
  population: number;
  region: string;
  subregion?: string;
  tld?: string[];
  currencies?: any;
  languages?: any
  borders?: string[];
  
}

class CountriesApiService {
    getCountries() {
    const abortController = new AbortController();
    const request = axios.get<fetchApiProps[]>("https://restcountries.com/v3.1/all")
    return { request, cancel: () => abortController.abort() }
}
}

export default new CountriesApiService()