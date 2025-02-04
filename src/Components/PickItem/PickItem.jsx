/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './PickItem.module.css';

function PickItem() {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!itemName) return;
    const newItem = { itemName, quantity, packed: false, id: Date.now() }
    handleAddItems(newItem);
    setQuantity(1);
    setItemName('');
  }
  function handleClearAll() {
    setItems([]);
  }
  return (
    <div>
      <div className={styles.header}>
        <h3>Select, Click, and You&apos;re Set!</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.item_container}>
          <h4>What’s on Your Travel Checklist?</h4>
          <div className={styles.item_box}>
            <select
              id="item-select"
              name="item"
              className={styles.items_number}
              value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => <option value={num} key={num}>{num}</option>)}
            </select>
            <input type='text' placeholder='Item...' value={itemName} onChange={(e) => setItemName(e.target.value)}
            />
            <button className={styles.btn}>Add</button>
          </div>
        </div>
      </form>
      <div className={styles.item_list}>
        <PackingList items={items} handleDeleteItem={handleDeleteItem} />
        {items.length > 0 && (
          <button className={styles.clear_btn} onClick={handleClearAll}>
            Clear List
          </button>
        )}
      </div>
    </div>
  );
}
export default PickItem;

function PackingList({items, handleDeleteItem}) {
  return (
    <ul>
      {items.map((singleItem) => {
        return(
        <PackingItem key={singleItem.id}
          packingData={singleItem}
         handleDeleteItem={handleDeleteItem}/>
      )})}
    </ul>
  )
}
function PackingItem({ packingData, handleDeleteItem  }) {
  return <li style={packingData.packed ? { textDecoration: 'line-through' } : {}}>
    <span>{packingData.quantity}{" "}{packingData.itemName}</span>
    <button className={styles.delete} onClick={() => handleDeleteItem(packingData.id)}>
        Delete Item
      </button>
  </li>
}