import { useState } from "react";
import styles from "./TemperatureConverterScreenStyle";

import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TemperatureConverter() {
  const [entradaCelsius, setEntradaCelsius] = useState("");
  const [entradaFahrenheit, setEntradaFahrenheit] = useState("");
  const [entradaKelvin, setEntradaKelvin] = useState("");

  function onChangeCelsius(valueCelsius) {
    const valueFahrenheit = (Number(valueCelsius) * 9) / 5 + 32;
    const valueKelvin = Number(valueCelsius) + 273.15;
    // console.log(valueFahrenheit);
    // console.log(valueKelvin);
    setEntradaFahrenheit(valueFahrenheit.toFixed(2).toString());
    setEntradaKelvin(valueKelvin.toFixed(2).toString());
    setEntradaCelsius(valueCelsius);
  }

  function onChangeFahrenheit(valueFahrenheit) {
    const valueCelsius = ((Number(valueFahrenheit) - 32) * 5) / 9;
    const valueKelvin = ((Number(valueFahrenheit) - 32) * 5) / 9 + 273.15;
    setEntradaCelsius(valueCelsius.toFixed(2).toString());
    setEntradaKelvin(valueKelvin.toFixed(2).toString());
    setEntradaFahrenheit(valueFahrenheit);
  }

  function onChanceKelvin(valueKelvin) {
    const valueCelsius = Number(valueKelvin) - 273.15;
    const valueFahrenheit = (Number(valueKelvin) - 273.15 * 9) / 5 + 32;
    setEntradaCelsius(valueCelsius.toFixed(2).toString());
    setEntradaFahrenheit(valueFahrenheit.toFixed(2).toString());
    setEntradaKelvin(valueKelvin);
  }

  function limpar() {
    setEntradaCelsius("");
    setEntradaFahrenheit("");
    setEntradaKelvin("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoCabecalho}>Converta temperatura entre Celsius, Fahrenheit e Kelvin</Text>
      <View>
        <CustomInput placeholder={"Celsius"} value={entradaCelsius} onChangeText={onChangeCelsius} />
        <CustomInput placeholder={"Fahrenheit"} value={entradaFahrenheit} onChangeText={onChangeFahrenheit} />
        <CustomInput placeholder={"Kelvin"} value={entradaKelvin} onChangeText={onChanceKelvin} />
        <TouchableOpacity style={styles.botao} onPress={limpar}>
          <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>
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
