import React, {useState, useEffect}from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result,setResult] = useState(null);
    
    const id= navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`); 
        setResult(response.data);
    };
    useEffect(() => {getResult(id);},[]);

    if (!result) {
        return null;
      }
    
    return(
        <View style= {{alignItems: 'center'}}>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList 
            data= {result.photos}
            keyExtractor = {photo => photo}
            renderItem= {({item}) => {
                return <Image style= {styles.image} source={{uri: item}} />
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontWeight: 'bold',
        fontSize:18, 
        margin:5
    },
    image:{
        width:200,
        height: 300,
        borderRadius: 4,
        marginVertical: 5
    },
});

export default ResultsShowScreen;