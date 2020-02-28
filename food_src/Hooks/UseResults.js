import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {


    const [Results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const SearchApi = async serachTerm => {
        try {
            console.log('hi')
        const response = await yelp.get('./search', {
            params: {
                limit: 50,
                term : serachTerm,
                location: 'son jose'
            }
        });

            setResults(response.data.businesses);
    }
        catch(err) {
            setErrorMessage('Something went wrong');
        }
        };
  
useEffect(() => {
    SearchApi('pasta');
}, []);

    return [SearchApi, Results, errorMessage];


};