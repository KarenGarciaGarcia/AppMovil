import { StyleSheet, Text, View } from "react-native";

export default function CardBasico() {
    return (
        <View style={style.card}>
            <Text style={style.titulo}> Bienvenidos</Text>
            <Text style={style.contenido}>A la App </Text>

        </View>
    );
}
const style = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#585656ff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contenido: {
        marginTop: 4,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'

    }

})
