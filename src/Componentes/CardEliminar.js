import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";

export default function CarEliminar() {
    return (
        <View style={style.card}>
            <Image style={style.img} source={{ uri: 'https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-simples-papel-que-contiene-lista-actividades-boligrafo-concepto-oficina_558723-130.jpg?w=2000' }} />
            <View style={style.card_contenido} >

                {/*Boton Sombreado*/}
                <TouchableOpacity style={style.botonSombreado}>
                    <Text style={style.texto}>Eliminar</Text>
                </TouchableOpacity>


            </View>

        </View>
    );
}
const style = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        // padding:16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#585656ff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 4,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 3 }
    },
    card_contenido: {
        padding: 16,
        // backgroundColor:'#f77474ff'
    },
    img: {
        width: '100%',
        aspectRatio: 1.3, // depende de la imagen (ancho/alto)
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        // borderRadius:10,
    },
    botonSombreado: {
        backgroundColor: '#f372e8ff',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 10,
        marginTop: 10,
        alignSelf: 'flex-start'
        // marginBottom: 15

    },
    texto: {
        fontWeight: 'bold',
        fontSize: 12
    }

})
