import './Card.css'

export default function Card(props) {
  const item = props.item;

  return (
    <div className="card">
      <h2>{item.nome}</h2>
      <img src={item.imagemUrl} />
    </div>
  )
}
