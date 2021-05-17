import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    caixa: {
        height: "100%"
    },
    
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    titulo: {
        color: "white",
        fontSize: 35
    },
    inputs:{
        width: "90%",
        padding: 8,
        alignItems: 'center'
    },
    input: {
        backgroundColor: "white",
        width: "90%",
        padding: 8,
        marginTop: 13,
        borderRadius: 10
    },
    btn: {
        backgroundColor: "#FF4D00",
        width: "90%",
        padding: 8,
        marginTop: 8,
        borderRadius: 10
    },
    
    texto: {
        fontSize: 20,
        color: "white",
        textAlign: 'center'

    },

    logo: {
        marginTop: 20

    }
})

export default styles;