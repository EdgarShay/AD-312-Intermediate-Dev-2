const BASE_URL = "https://dogapi.dog/api/v2"

// Fetch all breeds
export const fetchBreeds = async () => {
    const res = await fetch(`${BASE_URL}/breeds`)
    if (!res.ok) throw new Error("Failed to fetch breeds")
    return res.json()
}

// Fetch breed by ID
export const fetchBreedById = async (id) => {
    const res = await fetch(`${BASE_URL}/breeds/${id}`)
    if (!res.ok) throw new Error("Failed to fetch breed details")
    return res.json()
}

// Fetch facts
export const fetchFacts = async () => {
    const res = await fetch(`${BASE_URL}/facts`)
    if (!res.ok) throw new Error("Failed to fetch facts")
    return res.json()
}

// Fetch groups
export const fetchGroups = async () => {
    const res = await fetch(`${BASE_URL}/groups`)
    if (!res.ok) throw new Error("Failed to fetch groups")
    return res.json()
}