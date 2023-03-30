import { useAppSelector } from "../../../redux/hooks";
import { CharacterItem } from "./CharacterItem";
import './styles.css'

export function CharacterList(){
  const characters = useAppSelector(state => state.charactersReducer.characters)
  return (
    <>
      { characters.length === 0 && <div data-testid="no-found" className="characters-no-found">Personagem não encontrado :|</div> }
      {
        characters.map((character: Record<string, string>) =>  <CharacterItem character={character} key={character.id} />)
      }
    </>
  )
}
