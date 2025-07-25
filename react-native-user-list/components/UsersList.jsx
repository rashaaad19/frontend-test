import { Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import { useFetch } from "../hooks/useFetch";
import { Button } from "react-native-paper";

const UsersList = () => {
  const searchQuery = useSelector((state) => state.users.searchQuery);
  const page = useSelector((state) => state.users.page);
  const limit = useSelector((state) => state.users.limit);

  const { usersData, fetchUsersData, hasMore } = useFetch(
    `https://jsonplaceholder.typicode.com/users?_start=${
      page * limit
    }&_limit=${limit}`
  );
  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <FlatList
      data={filteredUsers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UserItem user={item} />}
      ListEmptyComponent={
        <Text style={{ textAlign: "center", padding: 20 }}>No users found</Text>
      }
      ListFooterComponent={
        filteredUsers.length > 0 && hasMore ? (
          <Button
            mode="contained"
            onPress={fetchUsersData}
            style={{
              marginBlock: 10,
              borderRadius: 8,
              width: "auto",
              alignSelf: "center",
            }}
            labelStyle={{ fontSize: 16, fontWeight: "bold" }}
          >
            Load More
          </Button>
        ) : null
      }
    ></FlatList>
  );
};

export default UsersList;
