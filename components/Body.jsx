import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        width: 70,
    }
})


const Body = () => {
    function press() {
        console.log('print pres button')
    }

    return (
        <View style={styles.header}>
            <Image />
        </View>
    );
}

export default Body





