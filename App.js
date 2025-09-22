import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

export default function App() {

  const [primeiroNumero, setPrimeiroNumero] = useState('');
  const [segundoNumero, setSegundoNumero] = useState('');
  const [operador, setOperador] = useState(null);
  const [resultado, setResultado] = useState(null);

  const [controleNumeral, setControleNumeral] = useState(1);

  function handleNumeral(numero) {
    if (controleNumeral === 1) {
      setPrimeiroNumero(primeiroNumero + numero);
    } else {
      setSegundoNumero(segundoNumero + numero);
    }
  }

  function handleOperacao(operacao) {
    setOperador(operacao);
    setControleNumeral(2);
  }

  function handleClear() {
    setPrimeiroNumero('');
    setSegundoNumero('');
    setOperador(null);
    setResultado(null);
    setControleNumeral(1);
  }

  function handleIgual() {
    switch (operador) {
      case '+':
        setResultado(Number(primeiroNumero) + Number(segundoNumero));
        break;
      case '-':
        setResultado(Number(primeiroNumero) - Number(segundoNumero));
        break;
      case '/':
        setResultado(Number(primeiroNumero) / Number(segundoNumero));
        break;
      case '*':
        setResultado(Number(primeiroNumero) * Number(segundoNumero));
        break;
      default:
        setResultado('Erro');
    }
    handleClear();
  }

  return (
    <View style={styles.container}>

      <View style={styles.telaDeResultado}>
        <Text style={{ fontSize: 80 }}>{primeiroNumero}</Text>
        <Text style={{ fontSize: 80 }}>{operador}</Text>
        <Text style={{ fontSize: 80 }}>{segundoNumero}</Text>
      </View>

      <View style={styles.containerNumeral}>
        {[1, 2, 3].map((num) => (
          <TouchableOpacity key={num} style={styles.botaoNumeral} onPress={() => handleNumeral(num)}>
            <Text style={{ fontSize: 80 }}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.containerNumeral}>
        {[4, 5, 6].map((num) => (
          <TouchableOpacity key={num} style={styles.botaoNumeral} onPress={() => handleNumeral(num)}>
            <Text style={{ fontSize: 80 }}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.containerNumeral}>
        {[7, 8, 9].map((num) => (
          <TouchableOpacity key={num} style={styles.botaoNumeral} onPress={() => handleNumeral(num)}>
            <Text style={{ fontSize: 80 }}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.containerNumeral}>
        <TouchableOpacity style={styles.botaoNumeral} onPress={() => handleNumeral(0)}>
          <Text style={{ fontSize: 80 }}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={() => handleOperacao('*')}>
          <Text style={{ fontSize: 80 }}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={handleClear}>
          <Text style={{ fontSize: 80 }}>C</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerNumeral}>
        <TouchableOpacity style={styles.botaoNumeral} onPress={() => handleOperacao('+')}>
          <Text style={{ fontSize: 80 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={() => handleOperacao('-')}>
          <Text style={{ fontSize: 80 }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={() => handleOperacao('/')}>
          <Text style={{ fontSize: 80 }}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerNumeral}>
        <TouchableOpacity style={styles.botaoNumeral} onPress={handleIgual}>
          <Text style={{ fontSize: 80 }}>=</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 80 }}>
        {resultado}
      </Text>

    </View>
  );
}