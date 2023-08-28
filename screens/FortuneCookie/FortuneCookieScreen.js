import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./FortuneCookieScreenStyle";

const biscoitoDefault = "Leia sua sorte🍀\nQuebre seu biscoito";
const frases = [
  "A sorte favorece a mente bem preparada.",
  "Espere pelo mais sábio dos conselhos: o tempo.",
  "O amor está sempre mais próximo do que você imagina.",
  "Deixe de lado as preocupações e seja feliz.",
  "Nós somos o que pensamos.",
  "A sorte favorece a mente bem preparada.",
];

export default function FortuneCookie() {
  const [biscoito, setBiscoito] = useState(biscoitoDefault);
  const [imagemBiscoito, setimagemBiscoito] = useState(require("../../assets/FortuneCookie/biscoito.png"));

  function Quebrar() {
    let n = Math.ceil(Math.random() * 5);
    setimagemBiscoito(require("../../assets/FortuneCookie/biscoitoAberto.png"));
    setBiscoito(frases[n]);

    setTimeout(() => {
      setimagemBiscoito(require("../../assets/FortuneCookie/biscoito.png"));
      setBiscoito("Leia sua sorte🍀\nQuebre seu biscoito");
    }, 3000);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={imagemBiscoito} />
      <Text style={styles.textoResultado}>{biscoito}</Text>
      {biscoito === biscoitoDefault && (
        <TouchableOpacity style={styles.estiloBotao} onPress={Quebrar}>
          <Text style={styles.textoBotao}>Quebrar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
