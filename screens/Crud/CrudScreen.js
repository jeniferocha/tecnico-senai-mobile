import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./CrudScreenStyle";

let produtos = [
  { nome: "Banana", valor: 22 },
  { nome: "Melancia", valor: 50 },
  { nome: "Morango", valor: 31 },
  { nome: "Maça", valor: 8 },
];


export default function Crud() {
  const [entradaNome, setEntradaNome] = useState("");
  const [entradaValor, setEntradaValor] = useState("");

  function cadastrar() {
    if (entradaNome.trim() != "" && entradaValor.trim() != "") {
      let produto = {
        nome: entradaNome.trim(),
        valor: Number(entradaValor),
      };
      if (isNaN(entradaValor)) {
        alert("Apenas numeros");
      } else {
        produtos.push(produto);
      }
    } else {
      alert("Preencha os campos!");
    }
    limpar();
  }

  function pesquisar() {
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].nome == entradaNome) {
        setEntradaValor(produtos[i].valor.toString());
        return produtos[i];
      }
    }
    limpar();
  }

  function editar() {
    if (entradaValor.trim() != "") {
      let produto = pesquisar();
      produto.valor = Number(entradaValor);
      setEntradaValor(produto.valor);
    } else {
      alert("Preencha os campos!");
    }
    limpar();
  }

  function apagar() {
    let produto = pesquisar();
    let index = produtos.indexOf(produto);
    produtos.splice(index, 1);
    limpar();
  }

  function limpar() {
    setEntradaNome("");
    setEntradaValor("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoH1}>CRUD</Text>
      <TextInput value={entradaNome} onChangeText={setEntradaNome} style={styles.inputs} placeholder="Nome" />
      <TextInput value={entradaValor} onChangeText={setEntradaValor} style={styles.inputs} placeholder="Valor" />

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={cadastrar}>
          <Text style={styles.textobotao}>CADASTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={pesquisar}>
          <Text style={styles.textobotao}>PESQUISAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={editar}>
          <Text style={styles.textobotao}>EDITAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={apagar}>
          <Text style={styles.textobotao}>APAGAR</Text>
        </TouchableOpacity>
      </View>

      <View>
        {produtos.map((produto, index) => (
          <Text key={index}>
            {produto.nome} - R${produto.valor.toFixed(2)}
          </Text>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
