import {
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  View,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGoals } from "../../hooks/useGoals";
import { useState } from "react";

const Goals = () => {
  const { goals } = useGoals();
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Goals</Text>
      <FlatList
        data={goals}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item }) => (
          <Pressable onPress={() => setSelected(item)}>
            <View style={styles.goal}>
              <Text style={{ margin: 16 }}>{item.goal}</Text>
              <View style={[styles.progress, { width: `${item.progress}%` }]} />
            </View>
          </Pressable>
        )}
      />
      {selected && (
        <Modal animationType="slide" visible={selected !== null}>
          <View style={styles.modal}>
            <Text style={styles.title}>{selected.goal}</Text>
            <Text>Adjust progress:</Text>
            <View style={styles.buttonWrapper}>
              <Pressable style={styles.btn} onPress={() => setSelected(null)}>
                <Text>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default Goals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
  },
  goal: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden",
    marginHorizontal: 30,
  },
  progress: {
    height: 10,
    backgroundColor: "#4caf50",
    minWidth: 10,
    borderRadius: 4,
  },
});
