import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import yelp from '../api/yelp';


const ResultShowResult = ({ navigation }) => {
    

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

 

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);     
    };
    console.log(result);
  
    return(
        <View style={{ marginTop: 40, alignItems: 'center'}}>
            <Text>
                Search Disply Screen
            </Text>
        </View>

    );

    useEffect(() => {
        getResult(id);
    }, []);
    
};


export default ResultShowResult;