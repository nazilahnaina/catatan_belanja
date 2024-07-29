import { useState } from "react";
import Item from "./Item";

export default function GroceryList({ items, onDeleteItem, onTonggleItem, onClearItems}) {

    const [sortBy, setSorBy] = useState('input');
  
    let sortedItems;
  
    // if(sortBy === 'input'){
    //   sortedItems = items;
    // }
  
    // if(sortBy === ' name'){
    //   sortedItems = items.slice().sort((a, b) => a.localeCompare(b.name));
    // }
  
    // if(sortBy === 'checked') {
    //   sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
    // }
  
  
    switch(sortBy) {
      case 'name' :
        sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'checked':
        sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
        break;
      default:
        sortedItems = items;
        break;
  
    }
  
  
    return (
      <>
      <div className="list">
      <ul>
        {sortedItems.map((item) => (
         <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onTonggleItem={onTonggleItem}/>
        ))}
       
      </ul>
    </div>
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSorBy(e.target.value)}>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button onClick={onClearItems}>Bersihkan Daftar</button>
    </div>
    </>
  
    );
  }