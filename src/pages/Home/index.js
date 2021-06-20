import React, { useState } from 'react'

import { 
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  Platform,
  Alert,
} from 'react-native'

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

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

      <Button onPress={handleAddNewSkill}>
        Add
      </Button>

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      {skills.map(skill => (
        <SkillCard key={skill} skill={skill} />
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
})