import { useEffect, useState } from "react";
import axios from "axios";
import {Center, Loader, Card, Stack, Avatar, Title, Text} from "@mantine/core";

export default function Profile() {
    const[user, setUser] = useState(null);
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
    useEffect(() => {

        fetchProfile();
    }, []);


  return (
    <Center mt={50}>
        <Stack align="center">
            <Avatar src={user?.avatar} size={100} radius="xl"/>

            <Title> {user?.name} </Title>

            <Text c="blue">{user?.email}</Text>
            <Text>
            <Text span fw={700}>User ID:</Text> {user?._id}
            </Text>

            <Text>
            <Text span fw={700}>Account Created:</Text>{" "}
            {new Date(user?.createdAt).toLocaleDateString()}
            </Text>

          
        </Stack>
    </Center>
  );
}
