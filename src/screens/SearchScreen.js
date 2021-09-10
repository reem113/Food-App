import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';



const SearchScreen = () => {

const [term, setTerm] = useState('');
const [searchApi, errMsg, results] = useResults();

const filterResultsByPrice = (price) =>{
    return results.filter(result => {
        return result.price === price;
    })
}

    return(
        <>
            <SearchBar term= {term} 
            onTermChange= {newTerm => setTerm(newTerm)}
            onTermSubmit= {() => searchApi(term)} />
            {errMsg ? <Text>{errMsg}</Text> : null}
            <ScrollView>
            <ResultsList 
            results={filterResultsByPrice('$')}
             title= 'Cost Effective'
             />
            <ResultsList 
            results={filterResultsByPrice('$$')}
             title= 'Bit Pricer'
             />
            <ResultsList 
            results={filterResultsByPrice('$')}
             title= 'Big Spender'
             />
            
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#fff'
    }
});

export default SearchScreen;