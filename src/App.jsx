import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];
 
 export default function App() {
  const [items, setItem] = useState(groceryItems);

  function handleAddItem(item) {
    setItem([...items, item]);
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked} : item));
  }

  function handleClearItems() {
    setItem([]);
  }


  return (
    <div className="app">
    <Header />
    <Form onAddItem={handleAddItem} />
    <GroceryList  items={items} onDeleteItem={handleDeleteItem} onTonggleItem={handleToggleItem} onClearItems={handleClearItems}/>
    <Footer items={items}/>
    </div>
   
  );
}









