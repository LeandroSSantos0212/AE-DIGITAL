import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column'
    },
    Header: {
        top: 15,
        height: 70,
        width: '100%',
        backgroundColor: '#20295F',
        borderBottomWidth: 5,
        borderBottomColor: '#EE6B29',
        alignItems: 'center',
        justifyContent: 'center'
    },
    HeaderText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    containerButtons: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 70,
    },
    buttonBack: {
        backgroundColor: '#EE6B29',
        width: '45%',
        padding: 10,
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    buttonScanActive: {
        backgroundColor: '#32CD32',
        width: '45%',
        padding: 10,
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        opacity: 1
    },

    buttonScanInative: {
        backgroundColor: '#20295F',
        width: '45%',
        padding: 10,
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        opacity: 0.5
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 12
    }

});

export default styles;