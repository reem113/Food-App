import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style= {styles.viewStyle}>
            <Feather style= {styles.iconStyle} name= "search"/>
            <TextInput
            autoCorrect= {false}
            autoCapitalize= 'none' 
            style= {styles.searchStyle}
            value= {term}
            onChangeText= {newTerm => onTermChange(newTerm)}
            placeholder= "Search"
            onEndEditing= {onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor: 'white',
        borderColor: '#F0EEEE',
        borderWidth: 3,
        height: 50,
        margin: 15,
        borderRadius: 8,
        padding:5,
        flexDirection: 'row'
    },
    searchStyle:{
        flex: 1,
        padding:10,
        marginHorizontal: 2
    },
    iconStyle:{
        fontSize:35,
        alignSelf: 'center',
    }
});

export default SearchBar;