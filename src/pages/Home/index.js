import React, { useEffect, useState } from 'react'

import { 
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  Platform,
  Alert,
  FlatList,
} from 'react-native'

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

export function Home() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good night')
    }
  }, [])

  function handleAddNewSkill() {
    if (skills.includes(newSkill)) {
      return Alert.alert('Opss... Pera ai!', `Já existe uma skill chamada ${newSkill} na sua lista!`);
    }

    setSkills(prevState => [...prevState, newSkill])

    setNewSkill('');
  }

  function handleInputChange(text) {
    setNewSkill(text)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Gabriel
      </Text>
      <Text style={styles.greetings}>
        {greeting}
      </Text>

      <TextInput
        value={newSkill}
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={handleInputChange}
      />

      <Button onPress={handleAddNewSkill}>
        Add
      </Button>

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      <FlatList
        data={skills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
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
  greetings: {
    color: '#fff',
  }
})