import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/usersSlice";

export const useFetch = (url, options = {}) => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users.usersData);
  const hasMore = useSelector((state) => state.users.hasMore);



  const fetchUsersData = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      dispatch(setUsers(data));
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  };
  
  useEffect(() => {
    if (usersData.length === 0) {
      fetchUsersData();
    }
  }, []);
  return { usersData, fetchUsersData, hasMore };
};
