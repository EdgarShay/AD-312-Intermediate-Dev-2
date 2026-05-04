import { useQuery } from "@tanstack/react-query"
import { fetchBreedById } from "../api/dogApi"

export default function BreedDetails({ id }) {
    const { data, isPending, isError } = useQuery({
        queryKey: ["breed", id],
        queryFn: () => fetchBreedById(id),
        enabled: !!id
    })

    if (!id) return <p>Select a breed</p>
    if (isPending) return <p>Loading details...</p>
    if (isError) return <p>Error loading details</p>

    const breed = data.data

    return (
        <div>
            <h2>{breed.attributes.name}</h2>
            <p>{breed.attributes.description}</p>
        </div>
    )
}