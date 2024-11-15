import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 75,
        alignItems: 'center'


    },
    FilterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#EE6B26'



    },
    FilterTextInative: {

        color: '#20295F',
        fontWeight: 'bold',
        fontSize: 18,
        opacity: 0.5
    },
    content: {
        width: '100%',
        marginTop: 30,

    },
    title: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#20295F',
        alignItems: 'center',
    },
    titleText: {
        color: '#20295F',
        fontSize: 18,
        position: 'relative',
        top: 11,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10

    }
});

export default styles;