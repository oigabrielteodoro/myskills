import React, { useState } from 'react'

import { 
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native'

export function Home() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  function handleAddNewSkill() {
    if (skills.includes(newSkill)) {
      return Alert.alert('Opss... Pera ai!', `Já existe uma skill chamada ${newSkill} na sua lista!`);
    }

    setSkills(prevState => [...prevState, newSkill])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Gabriel
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      
      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.8}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      {skills.map(skill => (
        <TouchableOpacity 
          key={skill}
          style={styles.buttonSkill} 
          activeOpacity={0.8}
        >
          <Text style={styles.textSkill}>
            {skill}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
})