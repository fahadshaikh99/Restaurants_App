import React from 'react';
import {View, Text, Image} from 'react-native';

const ResultsDetails = ({result}) => {
    return (
        <View style={{ marginLeft: 6}}>
        <Image 
        style={styles.imageStyle}
        source={{ uri: result.image_url }} />
        <Text> {result.name} </Text>
        <Text> {result.rating} Stars, {result.review_count} Reviews </Text>
        </View>
    );
};

const styles = {
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginRight: 10
    },

};

export default ResultsDetails;