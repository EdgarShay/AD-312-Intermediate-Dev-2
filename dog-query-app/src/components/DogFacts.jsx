import { useQuery } from "@tanstack/react-query"
import { fetchFacts } from "../api/dogApi"

export default function DogFacts() {
    const { data, isPending, isError } = useQuery({
        queryKey: ["facts"],
        queryFn: fetchFacts
    })

    if (isPending) return <p>Loading facts...</p>
    if (isError) return <p>Error loading facts</p>

    return (
        <div>
            <h2>Dog Facts</h2>
            {data.data.map((fact) => (
                <p key={fact.id}>🐾 {fact.attributes.body}</p>
            ))}
        </div>
    )
}