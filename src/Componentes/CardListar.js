import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";

export default function CardListar() {
    return (
        <View style={style.card}>
            <Image style={style.img} source={{ uri: 'http://dti.anahuacmayab.mx/wp-content/uploads/2020/01/disponibilidadBS.jpg' }} />
            <View style={style.card_contenido} >

                {/*Boton Sombreado*/}
                <TouchableOpacity style={style.botonSombreado}>
                    <Text style={style.texto}>Listar</Text>
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
        aspectRatio: 1.5, // depende de la imagen (ancho/alto)
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
