import * as React from 'react'
import {useState} from 'react';;
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';


const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 15,
        backgroundColor: '#1F2C34',
    },
    title: {
        marginLeft: 12,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#6C7982',
        flex: 7,
    },
    icons: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#6C7982',
        flex: 1,
    },
    button: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    }
})


const Top = () => {
    const [name, setName] = useState('WhatsApp')

    function press() {
        setName(name === 'WhatsApp' ? 'Instagram' : 'WhatsApp')
    }

    return (
        <View style={styles.main}>
            <Text style={styles.title}>{name}</Text>
            <Button
                onPress={press}
                style={styles.button}
                icon={<Icon style={styles.icons} name="search" size={25} color="#6C7982" />}
                title='teste'
            />
            <Icons style={styles.icons} name="dots-three-vertical" size={25} color="#6C7982" />;
        </View>
    );
}

export default Top





