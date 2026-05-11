import { useEffect, useState } from "react";
import axios from "axios";
import {Center, Loader, Card, Stack, Avatar, Title, Text} from "@mantine/core";

export default function Profile() {
    const[user, setUser] = useState(null);
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(
                "https://url-shortener-bootcamp.onrender.com/api/user/me",
                {
                    withCredentials: true,
                }
                );

                console.log(res.data);
                setUser(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfile();
    }, []);


  return (
    <Center mt={50}>
        <Stack align="center">
          <Avatar src={user?.avatar} radius="xl"size={100} />

          <Title> {user?.name} </Title>

          <Text> {user?.email} </Text>

          <Text> User ID:{user?._id} </Text>
        </Stack>
    </Center>
  );
}
