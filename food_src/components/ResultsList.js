import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetails from '../components/ResultsDetails';
import { withNavigation } from 'react-navigation';


const ResultsList = ({ title, results, navigation}) => {
    return (
        <View>
        <Text style={styles.titleText}>{title}</Text>
        <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem= {({item}) => {
            return ( 
            <TouchableOpacity onPress={() => navigation.navigate('Results', {id: item.id})}>

            <ResultsDetails result={item} />
            </TouchableOpacity>
            );
            }}
        />
        </View>
    );
};


const styles = {
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}

export default withNavigation(ResultsList);