import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface IUser {
  id: number;
  name: string;
  email: string;
}

const useFetchUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      setUsers(data);
    })();
  }, []);

  return users;
};

const Test = () => {
  const users = useFetchUsers();
  return (
    <View style={styles.container}>
      {users.map((user) => (
        <View key={user.id}>
          <Text style={styles.text}>{user.name}</Text>
          <Text>{user.email}</Text>
        </View>
      ))}
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
