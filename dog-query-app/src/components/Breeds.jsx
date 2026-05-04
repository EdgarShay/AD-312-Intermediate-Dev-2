import { useQuery } from "@tanstack/react-query"
import { fetchBreeds } from "../api/dogApi"

export default function Breeds({ setSelectedId }) {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["breeds"],
        queryFn: fetchBreeds
    })

    if (isPending) return <p>Loading breeds...</p>
    if (isError) return <p>Error: {error.message}</p>

    return (
        <div>
            <h2>Dog Breeds</h2>
            <ul>
                {data.data.map((breed) => (
                    <li key={breed.id}>
                        <button onClick={() => setSelectedId(breed.id)}>
                            {breed.attributes.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}