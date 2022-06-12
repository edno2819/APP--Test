import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const styles = StyleSheet.create({

})


const Login = () => {
    function press() {
        console.log('print pres button')
    }

    return (
        <View style={styles.main}>
            <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={press}>
                Sign in with Facebook
            </FontAwesome.Button>
            <FontAwesome.Button name="twitter" backgroundColor="#1da1f2" onPress={press}>
                Sign in with Twitter
            </FontAwesome.Button>
        </View>
    );
}

export default Login





