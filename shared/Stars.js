import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Stars() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>       
        <View style={styles.stars}>
          <MaterialIcons name="star-border" size={32} style={styles.starUnselected} />
          <MaterialIcons name="star-border" size={32} style={styles.starUnselected} />
          <MaterialIcons name="star-border" size={32} style={styles.starUnselected} />
          <MaterialIcons name="star-border" size={32} style={styles.starUnselected} />
          <MaterialIcons name="star-border" size={32} style={styles.starUnselected} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  starUnselected: {
    color: '#aaa',
  },
});