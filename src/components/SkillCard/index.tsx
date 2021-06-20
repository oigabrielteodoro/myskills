import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

type SkillCardProps = {
  title: string;
}

export function SkillCard({ title }: SkillCardProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill} 
      activeOpacity={0.8}
    >
      <Text style={styles.textSkill}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
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