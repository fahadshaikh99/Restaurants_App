import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import yelp from '../api/yelp';


const ResultShowResult = ({ navigation }) => {
    

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);     
    };
    
  
    return(
        <View style={{ marginTop: 40, alignItems: 'center'}}>
            <Text>
                heelllo
                </Text>
            </View>

    );

    useEffect(() => {
        getResult(id);
    }, []);
    
};


export default ResultShowResult;