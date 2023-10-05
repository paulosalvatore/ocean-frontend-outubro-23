import Tag from '../Tag/Tag';
import './Card.css'

export default function Card(props) {
  const item = props.item;

  const tags = item.tags || [];

  return (
    <div className="card">
      <h2>{item.nome}</h2>

      <div className="tags-list">
        {tags.map(function (tag) {
          return <Tag text={tag} />
        })}
      </div>

      <img src={item.imagemUrl} />
    </div>
  )
}
