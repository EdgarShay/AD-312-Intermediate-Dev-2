import React, { useState } from "react"
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createPost } from "../api/postApi"

export default function PostForm() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const queryClient = useQueryClient()

    const createMutation = useMutation({
        mutationFn: createPost,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts"],
            })

            setTitle("")
            setBody("")
        },
    })

    const handleCreate = () => {
        if (!title || !body) {
            alert("Please fill all fields")
            return
        }

        createMutation.mutate({
            title,
            body,
            userId: 1,
        })
    }

    return (
        <View style={styles.form}>
            <Text style={styles.heading}>Create New Post</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter title"
                value={title}
                onChangeText={setTitle}
            />

            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Enter body"
                value={body}
                onChangeText={setBody}
                multiline
            />

            <TouchableOpacity style={styles.button} onPress={handleCreate}>
                <Text style={styles.buttonText}>Create Post</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 15,
        marginBottom: 20,
        elevation: 4,
    },

    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },

    input: {
        backgroundColor: "#f1f1f1",
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
    },

    textArea: {
        height: 80,
    },

    button: {
        backgroundColor: "#2563eb",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
})