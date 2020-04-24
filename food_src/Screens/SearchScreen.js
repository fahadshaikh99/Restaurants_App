import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import UseResults from '../Hooks/UseResults';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [ SearchApi, Results, errorMessage ] = UseResults();

    const FilterResultByPrice = (price) => {
        return Results.filter(Results => {
            return Results.price === price;
        });
    };

    return(
        
        <>
            <ScrollView style={{ marginTop: 20}}>
                <SearchBar
                    term={term}
                    onTermChange={setTerm}     
                    onTermSubmited={() => SearchApi(term)}
                />
                {errorMessage ? <Text>{errorMessage}</Text> : null}
            
                <Text>
                    we have found {Results.length} results in our data
                </Text>
                <ResultsList
                    results ={FilterResultByPrice('$')}
                    title = "Cost Effective"
                />
                <ResultsList
                    results ={FilterResultByPrice('$$')}
                    title = "Bit Pricier"
                />
                <ResultsList
                    results ={FilterResultByPrice('$$$')}
                    title = "Big Spender"
                />
            </ScrollView>
        </>
    );
}


const styles = StyleSheet.create({});

export default SearchScreen;