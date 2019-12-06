// source : https://code.tutsplus.com/tutorials/easier-react-native-development-with-expo--cms-30546

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Score extends React.Component 
{
    render ()
    {
        return (
            <View style = {styles.score_container}>
                <Text style = {styles.score_container}>
                    {this.props.score}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create
(
    {
        score_container:
        {
            flex : 1,
            alightItems : 'center',
            padding : 10
        },

        score :
        {
            fontSize : 40,
            fontWeight : 'bold'
        }
    }
);