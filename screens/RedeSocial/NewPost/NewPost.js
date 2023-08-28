import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./NewPostStyle";

export function Newpost({ addPostagem }) {
  const [inputImagem, setInputImagem] = useState("");
  const [inputTexto, setInputTexto] = useState("");

  function cadastrar() {
    const postagem = {
      imagem: inputImagem,
      texto: inputTexto,
    };

    addPostagem((postagensAtuais) => {
      postagensAtuais.unshift(postagem);
      return postagensAtuais;
    });
    alert("cadastrado");

    limpar();
  }

  function limpar() {
    setInputImagem("");
    setInputTexto("");
  }

  return (
    <View style={{ alignItems: "center", padding: 40 }}>
      <Text style={styles.textoInputs}>Nome da imagem</Text>
      <TextInput style={styles.inputs} value={inputImagem} onChangeText={setInputImagem}></TextInput>
      <Text style={styles.textoInputs}>Texto</Text>
      <TextInput
        editable
        multiline
        numberOfLines={10}
        maxLength={120}
        style={styles.inputMensagem}
        value={inputTexto}
        onChangeText={setInputTexto}
      ></TextInput>
      <TouchableOpacity style={styles.botao} onPress={cadastrar}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
