export default function Item({ item, onDeleteItem, onTonggleItem }) {
    return (
      <li key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => onTonggleItem(item.id)} />
      <span style={ item.checked ? { textDecoration: 'line-through' } : {}}>
       {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  
    )
  }