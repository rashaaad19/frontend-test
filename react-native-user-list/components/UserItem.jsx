import { StyleSheet } from "react-native";
import { Card, Text, Avatar } from "react-native-paper";
import { combineAddress } from "../utils/stringFunctions";

const UserItem = ({ user }) => {
  return (
    <Card style={styles.card} mode="outlined">
      <Card.Title
        title={user.name}
        subtitle={user.company.name}
        left={() => (
          <Avatar.Text
            label={user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
            size={40}
          />
        )}
      />
      <Card.Content>
        <Text variant="bodyMedium" style={styles.text}>
          📧 {user.email}
        </Text>
        <Text variant="bodyMedium" style={styles.text}>
          📞 {user.phone}
        </Text>
        <Text variant="bodyMedium" style={styles.text}>
          🌐 {user.website}
        </Text>
        <Text variant="bodySmall" style={styles.address}>
          🏠 {combineAddress(user.address.street, user.address.city, user.address.zipcode)}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 3,
  },
  text: {
    marginBottom: 4,
  },
  address: {
    marginTop: 8,
    color: "gray",
  },
});
