/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './PickItem.module.css';
import Airplane from '../../assets/images/plane.svg';
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
    const confirmed = window.confirm('Are you sure you want to delete all items?');
    if (confirmed) setItems([]);
  }
  function handleToggleItem(id) {
    setItems(items => items.map(item => 
      item.id === id ? { ...item, packed: !item.packed } : item
    ));
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
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value))}>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => 
                <option value={num} key={num}>{num}</option>
              )}
            </select>
            <input 
              type='text' 
              placeholder='Item...' 
              value={itemName} 
              onChange={(e) => setItemName(e.target.value)}
            />
            <button className={styles.btn}>Add</button>
          </div>
        </div>
      </form>
      <div className={styles.item_list}>
        <PackingList 
          items={items} 
          handleDeleteItem={handleDeleteItem} 
          handleToggleItem={handleToggleItem}  
        />
        {items.length > 0 && (
          <button className={styles.clear_btn} onClick={handleClearAll}>
            Clear List
          </button>
        )}
      </div>
       <Stats items={items} />
    </div>
  );
}

function PackingList({ items, handleDeleteItem, handleToggleItem }) {
  return (
    <ul>
      {items.map((singleItem) => (
        <PackingItem 
          key={singleItem.id}
          packingData={singleItem}
          handleDeleteItem={handleDeleteItem} 
          handleToggleItem={handleToggleItem}  
        />
      ))}
    </ul>
  );
}

function PackingItem({ packingData, handleDeleteItem, handleToggleItem }) {
  return (
    <li>
      <div>
        <input 
          type='checkbox' 
          className={styles.checkbox}
          checked={packingData.packed}  
          onChange={() => handleToggleItem(packingData.id)}  
        />
        <span style={packingData.packed ? { textDecoration: 'line-through' } : {}} >
          {packingData.quantity}{" "}{packingData.itemName}
        </span>
      </div>
      <button className={styles.delete} onClick={() => handleDeleteItem(packingData.id)}>
        Delete Item
      </button>
    </li>
  );
}

export default PickItem;

function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const packedPercent = numItems === 0 ? 0 : Math.floor((numPacked / numItems) * 100);
  return (
    <div className={styles.statistics}>
      {packedPercent === 100 ? (
        <div className={styles.packedStatus}>
          <p>All items are packed! Ready to Go!</p>
          <img src={Airplane} alt='airplane' className={styles.plane} />
        </div>
      ) : (
        <h3>
          You have {numItems} items in your list, and you have already picked {numPacked} ({packedPercent}%)
        </h3>
      )}
    </div>
  );
}