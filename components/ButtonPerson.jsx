import * as React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';


var styles = StyleSheet.create({
    btnClickContain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        backgroundColor: '#009D6E',
        borderRadius: 5,
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        borderRadius: 10,
    },
    btnIcon: {
        height: 25,
        width: 25,
    },
    btnText: {
        fontSize: 18,
        color: '#FAFAFA',
        marginLeft: 10,
        marginTop: 2,
    }
});

<TouchableHighlight
    onPress={this.onBooking} style={styles.btnClickContain}
    underlayColor='#042417'>
    <View
        style={styles.btnContainer}>
        <Icon
            name='fontawesome|facebook-square'
            size={25}
            color='#042'
            style={styles.btnIcon} />
        <Text style={styles.btnText}>Sign In with Facebook</Text>
    </View>
</TouchableHighlight>