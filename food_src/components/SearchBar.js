import React from 'react';
import {View, TextInput, StyleSheet } from 'react-native';
// import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ term, onTermChange, onTermSubmited}) => {
    return(
        <View style={styles.backgroundStyle}>
            {/* <Feather style={styles.iconStyle}
            name="search"
            /> */}

            <Icon name="search" style={styles.iconStyle}  />
            <TextInput 
            style={styles.InputTextStyle}
            placeholder="Search Bar"
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmited}
            >
                
            </TextInput>
        </View>
    );
}


const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginTop: 10,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        
    },
    iconStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 13
    },
    InputTextStyle: {
        fontSize: 20,
        flex: 1
    }
});

export default SearchBar;