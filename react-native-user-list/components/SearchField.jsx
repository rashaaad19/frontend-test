import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/usersSlice"; 
const SearchField = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.users.searchQuery);

  const handleSearchChange = (text) => {
    dispatch(setSearchQuery(text));
  };

  return (
    <TextInput
      mode="outlined"
      label="Search Users"
      value={searchQuery}
      onChangeText={handleSearchChange}
      style={{ marginBottom: 16 }}
    />
  );
};

export default SearchField;

const styles = StyleSheet.create({});
