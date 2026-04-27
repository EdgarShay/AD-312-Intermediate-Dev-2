import { useState } from "react";
import { useImmer } from "use-immer";

export default function ShoppingListWithImmer() {
    const [shoppingList, updateShoppingList] = useImmer([]);

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);

    // ➕ ADD ITEM
    function addItem() {
        updateShoppingList(draft => {
            draft.push({
                id: Date.now(),
                name,
                quantity,
                details: {
                    category: "General",
                    notes: "New item"
                }
            });
        });
    }

    // ✏️ UPDATE ITEM
    function updateItem(id) {
        updateShoppingList(draft => {
            const item = draft.find(i => i.id === id);
            if (item) {
                item.quantity += 1;
                item.details.notes = "Updated!";
            }
        });
    }

    // ❌ REMOVE ITEM
    function removeItem(id) {
        // add "removing" class first
        const element = document.getElementById(`item-${id}`);
        if (element) {
            element.classList.add("removing");
        }

        // remove after animation
        setTimeout(() => {
            updateShoppingList(draft => {
                const index = draft.findIndex(i => i.id === id);
                if (index !== -1) {
                    draft.splice(index, 1);
                }
            });
        }, 300);
    }
    return (
        <div className="container">
            <h2>🛒 Shopping List</h2>

            <div className="form-group">
                <input
                    placeholder="Item name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input
                    type="number"
                    value={quantity}
                    onChange={e => setQuantity(Number(e.target.value))}
                />

                <button className="add" onClick={addItem}>
                    Add
                </button>
            </div>

            <ul>
                {shoppingList.map(item => (
                    <li id={`item-${item.id}`} key={item.id}>
                        <div className="item-header">
                            <span className="item-name">{item.name}</span>
                            <span className="item-qty">Qty: {item.quantity}</span>
                        </div>

                        <div className="item-notes">
                            {item.details.notes}
                        </div>

                        <div className="actions">
                            <button
                                className="update"
                                onClick={() => updateItem(item.id)}
                            >
                                Update
                            </button>

                            <button
                                className="remove"
                                onClick={() => removeItem(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}