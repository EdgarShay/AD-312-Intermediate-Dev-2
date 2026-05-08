const BASE_URL = "https://jsonplaceholder.typicode.com"

// GET POSTS
export const fetchPosts = async (userId) => {
    const url = userId
        ? `${BASE_URL}/posts?userId=${userId}`
        : `${BASE_URL}/posts`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Failed to fetch posts")
    }

    return response.json()
}

// CREATE POST
export const createPost = async (post) => {
    const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    })

    return response.json()
}

// UPDATE POST (PUT)
export const updatePost = async (post) => {
    const response = await fetch(`${BASE_URL}/posts/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    })

    return response.json()
}

// PATCH TITLE
export const patchPost = async ({ id, title }) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
    })

    return response.json()
}

// DELETE POST
export const deletePost = async (id) => {
    await fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE",
    })

    return id
}