import { TouchableOpacity, View, Text, ScrollView } from "react-native";

import styles from "./StorytellerScreenStyle";
import { useState } from "react";

const fraseInicio = ["🌻🌻🌻\nO Girassol amarelo dormia na sua casa, embaixo da terra."];

const icones_textos = [
  "🌧🏠🌧\nUm dia, bateram à sua porta:\n -Toc… toc…toc… Girassol, sou a Chuva! Quero entrar na sua casa!",
  "☔🌧☔ \n- Não, não, Dona Chuva. Vou ficar toda molhada;",
  "😴💤🛌\nA Chuva foi-se embora. O Girassol continuou dormindo.",
  "🕐🚪⏳\nPassou o tempo. Bateram outra vez à sua porta:",
  "⛈🍃🌧\n- Chu… Chu…chu… Girassol, sou o Vento! Quero entrar na sua casa!",
  "🌬👩‍🦰💨\n- Não, não Senhor Vento. Vou ficar despenteada!",
  "💨😴🔈\nO Vento foi-se embora. O Girassol continuou dormindo até ouvir outro barulho.",
  "☀🏠😎\n- Flap… flap…flap.. Girassol, sou o Sol! Quero entrar na sua casa.",
  "🌤🌞⛱\n- Não, não, Senhor Sol. Vou ficar toda queimada.",
  "💤🥴😴\nO Sol foi-se embora. O Girassol continuou o seu sono.",
  "🗣😂🗣\nMas, um dia, ela escutou três vozes alegres:",
  "🌧☀💨👪\n- Toc…toc..chu..chu..flap..flap..Girassol somos a Chuva, o Vento e o Sol! Viemos buscar você para ver a primavera!.",
  "🙌🎉🙏\nA Chuva pegou a mão direita do Girassol, o Sol pegou a mão esquerda, o Vento soprou de mansinho e… Ó maravilha!",
  "🌼🌷🌹🌻\nGirassol estava num jardim cheio de flores.",
  "🌺🌸🌻🍂🌳\nAs crianças e os pássaros cantavam:\n“ A  primavera chegou… A primavera chegou..”",
];

export default function Storyteller() {
  return (
    <View style={styles.container}>
      <Header />
      <IconComponente />
    </View>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>Utilize o botão para contar a história</Text>
    </View>
  );
}

function IconComponente() {
  const [frases, setFrases] = useState(fraseInicio);

  function AddHistoria() {
    const n = Math.floor(Math.random() * icones_textos.length);
    setFrases([...frases, icones_textos[n]]);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.estiloBotao} onPress={AddHistoria}>
          <Text style={styles.textoBotao}>Adicionar história</Text>
        </TouchableOpacity>
        {frases.map((frase, index) => {
          return (
            <Text key={index} style={styles.textoResultado}>
              {frase}
            </Text>
          )
        })}
      </ScrollView>
    </View>
  );
}
