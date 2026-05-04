import { useQuery } from "@tanstack/react-query"
import { fetchGroups } from "../api/dogApi"

export default function DogGroups() {
    const { data, isPending, isError } = useQuery({
        queryKey: ["groups"],
        queryFn: fetchGroups
    })

    if (isPending) return <p>Loading groups...</p>
    if (isError) return <p>Error loading groups</p>

    return (
        <div>
            <h2>Dog Groups</h2>
            {data.data.map((group) => (
                <div key={group.id}>
                    <h4>{group.attributes.name}</h4>
                    <p>{group.attributes.description}</p>
                </div>
            ))}
        </div>
    )
}