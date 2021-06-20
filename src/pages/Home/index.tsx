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

type SkillData = {
  id: string;
  title: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [greeting, setGreeting] = useState('');
  const [skills, setSkills] = useState<SkillData[]>([]);

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
    if (skills.some(skill => skill.title === newSkill)) {
      return Alert.alert('Opss... Pera ai!', `Já existe uma skill chamada ${newSkill} na sua lista!`);
    }

    const data = {
      id: String(new Date().getTime()),
      title: newSkill,
    }

    setSkills(prevState => [...prevState, data])

    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setSkills(prevState => prevState.filter(skill => skill.id !== id));
  }

  function handleInputChange(text: string) {
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
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            title={item.title} 
            onPress={() => handleRemoveSkill(item.id)} 
          />
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