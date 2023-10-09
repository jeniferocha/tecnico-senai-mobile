import { Text, View, TextInput, TouchableOpacity } from "react-native";

import styles from "./SplitAccountScreenStyle";
import { useState } from "react";

export default function SplitAccount() {
  const [entradaValorConta, setEntradaValorConta] = useState("");
  const [entradaTaxaGorjeta, setEntradaTaxaGorjeta] = useState("");
  const [entradaQtdPessoas, setEntradaQtdPessoas] = useState("");
  const [saidaResultado, setSaidaResultado] = useState("");

  function calcularValorPorPessoas() {
    let calculoTaxaGorjeta = (Number(entradaTaxaGorjeta) / 100) * Number(entradaValorConta);

    let resultadoConta = (Number(entradaValorConta) + calculoTaxaGorjeta) / Number(entradaQtdPessoas);
    setSaidaResultado(resultadoConta.toFixed(2));

    setTimeout(() => {
      setEntradaValorConta("");
      setEntradaTaxaGorjeta("");
      setEntradaQtdPessoas("");
      setSaidaResultado("");
    }, 5000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoCabecalho}>Calcular divisão de conta</Text>
      <View>
        <CamposInput name={"Valor da conta"} value={entradaValorConta} onChangeText={setEntradaValorConta} />
        <CamposInput name={"Taxa da gorjeta"} value={entradaTaxaGorjeta} onChangeText={setEntradaTaxaGorjeta} />
        <CamposInput name={"Quantidade de pessoas"} value={entradaQtdPessoas} onChangeText={setEntradaQtdPessoas} />
        <TouchableOpacity style={styles.botao} onPress={calcularValorPorPessoas}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.textoResultado}>R${saidaResultado}</Text>
      </View>
    </View>
  );
}

function CamposInput(props) {
  return (
    <View>
      <View>
        <Text style={styles.textoInput}>{props.name}</Text>
      </View>
      <TextInput style={styles.input} onChangeText={props.onChangeText} value={props.value} />
    </View>
  );
}
