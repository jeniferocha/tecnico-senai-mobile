import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";


import styles from "./ImcScreenStyle";

export default function Imc() {
  const [entradaPeso, setEntradaPeso] = useState("");
  const [entradaAltura, setEntradaAltura] = useState("");
  const [saidaResultado, setSaidaResultado] = useState("");

  function calcularIMC() {
    let resultadoImc = Number(entradaPeso) / Number(entradaAltura^2)
    setSaidaResultado(resultadoImc.toFixed(2));


    setTimeout(() => {
      setEntradaPeso("")
      setEntradaAltura("")
      setSaidaResultado("")
    }, 3000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewImagem}>
        <Image style={styles.imagem} source={require('../../assets/IMC/tabela-IMC.png')} />
      </View>
      <View>
        <Text style={styles.textoInput}>Peso</Text>
        <TextInput style={styles.input} value={entradaPeso} onChangeText={setEntradaPeso} keyboardType="numeric" />
        <Text style={styles.textoInput}>Altura</Text>
        <TextInput style={styles.input} value={entradaAltura} onChangeText={setEntradaAltura} keyboardType="numeric" />
        <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>  
        <Text style={styles.textoResultado}>{saidaResultado}</Text>      
      </View>
    </View>
  );
}
