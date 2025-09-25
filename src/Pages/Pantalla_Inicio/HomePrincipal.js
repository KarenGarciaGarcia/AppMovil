import React, { useState, useEffect } from 'react';

import { StyleSheet, Platform, Text, View, StatusBar, ScrollView, Button } from 'react-native';
import CardBasico from '../../Componentes/CardBasico';
import CardRegistrar from '../../Componentes/CardRegistrar';
import CardListar from '../../Componentes/CardListar';
import CarEliminar from '../../Componentes/CardEliminar';

export default function HomePrincipal({navigation}) {
    const [colorFondo, setColorFondo] = useState('#e1b8d4ff');

    const cambiarColor = () => {
        setColorFondo(prev => prev === '#e1b8d4ff' ? '#a3d8f4' : '#e1b8d4ff');
    };

    // cambio de color Fondo
    useEffect(() => {
        console.log("El color de fondo ha cambiado a:", colorFondo);
    }, [colorFondo]); // se ejecuta cada vez que colorFondo cambie

    return (
        <ScrollView >
            <View style={[style.mainS, { backgroundColor: colorFondo }]}>
                <Text style={style.title}>Página Principal </Text>
                <Button title="Cambiar color" onPress={cambiarColor} />
                <CardBasico navigation={navigation} />
                <CardRegistrar navigation={navigation} />
                <CardListar navigation={navigation} />
                <CarEliminar navigation={navigation} />


            </View>
        </ScrollView>

    );

}

const style = StyleSheet.create({
    mainS: {
        flex: 2,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 15,

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    }
});
