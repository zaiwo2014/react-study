import { useState } from "react"
import { Link } from "react-router-dom"

function App() {

  const [newItem, setNewItem] = useState("")
  const [itemList, setItemList] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem.trim() === "") return
    setItemList([...itemList, newItem.trim()])
    setNewItem("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter a new item"
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Link to = {"/test"}>
        Go to test page
      </Link>

    </>
  )
}


export default App
