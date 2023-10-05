import './App.css'
import Card from './components/Card/Card'

/*
- Layout: Cards estão um embaixo do outro
- Conteúdo está repetido/não está dinâmico
*/

function App() {
  const personagem1 = {
    nome: 'Rick Sanchez',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  const personagem2 = {
    nome: 'Morty Smith',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }

  const personagem3 = {
    nome: 'Summer Smith',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }

  const personagens = [personagem1, personagem2, personagem3]

  return (
    <>
      <div className="cards-list">
        {personagens.map(function (personagem) {
          return <Card item={personagem} />
        })}
      </div>
    </>
  )
}

export default App
