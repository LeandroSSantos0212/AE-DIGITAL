import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card: {
        width: '90%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 5

    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    typeActive: {
        width: 30,
        height: 30
    },
    cardTitle: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    cardRight: {
        alignItems: 'flex-end',
        justifyContent: 'space-between'

    },
    cardDate: {
        padding: 5,
        color: '#EE6B26',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cardTime: {
        color: '#707070',
        fontWeight: 'bold',
        padding: 5
    },
    cardDone: {
        opacity: 0.5
    }


});

export default styles;