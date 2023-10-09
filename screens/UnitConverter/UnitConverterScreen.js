import styles from "./UnitConverterScreenStyle";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function UnitConverter() {
  const [entradaMetro, setEntradaMetro] = useState("");
  const [entradaCentimetro, setEntradaCentimetro] = useState("");

  const [entradaLitro, setEntradaLitro] = useState("");
  const [entradaMililitro, setEntradaMililitro] = useState("");

  function onChangeMetro(valorMetro) {
    const valorCentimetro = Number(valorMetro) * 100;
    setEntradaCentimetro(valorCentimetro.toFixed(0).toString());
    setEntradaMetro(valorMetro);
  }

  function onChangeCentimetro(valorCentimetro) {
    const valorMetro = Number(valorCentimetro) / 100;
    setEntradaMetro(valorMetro.toFixed(0).toString());
    setEntradaCentimetro(valorCentimetro);
  }

  function onChangeLitro(valorLitro) {
    const valorMililitro = Number(valorLitro) * 1000;
    setEntradaMililitro(valorMililitro.toFixed(0).toString());
    setEntradaLitro(valorLitro);
  }

  function onChangeMililitro(valorMililitro) {
    const valorLitro = Number(valorCentimetro) / 1000;
    setEntradaLitro(valorLitro.toFixed(0).toString());
    setEntradaMililitro(valorMililitro);
  }

  function limpar() {
    setEntradaMetro("");
    setEntradaCentimetro("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoCabecalho}>Converta as unidades de medidas</Text>
      <ScrollView>
        <View style={styles.view}>
          <Text style={styles.textoCabecalho}>Metro x Centimetro</Text>
          <CustomInput placeholder={"Metro"} value={entradaMetro} onChangeText={onChangeMetro} />
          <CustomInput placeholder={"Centimetro"} value={entradaCentimetro} onChangeText={onChangeCentimetro} />

          <Text style={styles.textoCabecalho}>Litro x Mililitro</Text>
          <CustomInput placeholder={"Litro"} value={entradaLitro} onChangeText={onChangeLitro} />
          <CustomInput placeholder={"Mililitro"} value={entradaMililitro} onChangeText={onChangeMililitro} />

          <TouchableOpacity style={styles.botao} onPress={limpar}>
            <Text style={styles.textoBotao}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function CustomInput(props) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType="numeric"
      />
    </View>
  );
}
