import React, { useState } from "react"

import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"

import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query"

import {
    deletePost,
    fetchPosts,
    patchPost,
} from "../api/postApi"

import PostForm from "./PostForm"

export default function PostList() {
    const [userId, setUserId] = useState("")

    const queryClient = useQueryClient()

    const {
        data,
        isPending,
        isError,
        error,
    } = useQuery({
        queryKey: ["posts", userId],
        queryFn: () => fetchPosts(userId),
    })

    const deleteMutation = useMutation({
        mutationFn: deletePost,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts"],
            })
        },
    })

    const patchMutation = useMutation({
        mutationFn: patchPost,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts"],
            })
        },
    })

    if (isPending) {
        return <Text style={styles.center}>Loading posts...</Text>
    }

    if (isError) {
        return (
            <Text style={styles.center}>
                Error: {error.message}
            </Text>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CRUD Query App</Text>

            <TextInput
                style={styles.filterInput}
                placeholder="Filter by User ID"
                value={userId}
                onChangeText={setUserId}
                keyboardType="numeric"
            />

            <PostForm />

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.postTitle}>
                            {item.title}
                        </Text>

                        <Text style={styles.postBody}>
                            {item.body}
                        </Text>

                        <View style={styles.buttonRow}>
                            <TouchableOpacity
                                style={styles.patchButton}
                                onPress={() =>
                                    patchMutation.mutate({
                                        id: item.id,
                                        title: "Updated Title",
                                    })
                                }
                            >
                                <Text style={styles.buttonText}>
                                    PATCH
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() =>
                                    deleteMutation.mutate(item.id)
                                }
                            >
                                <Text style={styles.buttonText}>
                                    DELETE
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#eef2ff",
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
        color: "#1e3a8a",
    },

    filterInput: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 10,
        marginBottom: 15,
    },

    card: {
        backgroundColor: "#fff",
        padding: 18,
        borderRadius: 15,
        marginBottom: 15,
        elevation: 4,
    },

    postTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 6,
    },

    postBody: {
        color: "#555",
    },

    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },

    patchButton: {
        backgroundColor: "#2563eb",
        padding: 12,
        borderRadius: 10,
        width: "48%",
        alignItems: "center",
    },

    deleteButton: {
        backgroundColor: "#dc2626",
        padding: 12,
        borderRadius: 10,
        width: "48%",
        alignItems: "center",
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
    },

    center: {
        textAlign: "center",
        marginTop: 100,
        fontSize: 18,
    },
})