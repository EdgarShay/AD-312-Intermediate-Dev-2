import { useState } from "react"
import BreedDetails from "./components/BreedDetails"
import Breeds from "./components/Breeds"
import DogFacts from "./components/DogFacts"
import DogGroups from "./components/DogGroups"

function App() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className="container">
      <h1>🐶 Dog Query App</h1>

      <Breeds setSelectedId={setSelectedId} />
      <BreedDetails id={selectedId} />
      <DogFacts />
      <DogGroups />
    </div>
  )
}

export default App