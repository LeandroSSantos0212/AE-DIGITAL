import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    header: {
        top: 15,
        height: 70,
        width: '100%',
        backgroundColor: '#20295F',
        borderBottomWidth: 5,
        borderBottomColor: '#EE6B29',
        alignItems: 'center',
        justifyContent: 'center'

    },

    logo: {
        width: 100,
        height: 30,

    },
    notification: {
        position: 'absolute',
        right: 20
    },

    notificationImage: {
        width: 30,
        height: 35
    },

    notificationText: {
        fontWeight: 'bold',
        color: '#EE6B26'
    },

    circle: {
        width: 25,
        height: 25,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 15,
        bottom: 15
    },
    leftIcon: {
        position: 'absolute',
        left: 20,

    },
    leftIconImage: {
        width: 30,
        height: 30
    }
});

export default styles;