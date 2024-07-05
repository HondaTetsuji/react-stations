// DO NOT DELETE

import './App.css';
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const headerText = 'Railway React 0-11';
  const explainText = '犬の画像を表示するサイトです';

  return (
    <div>
      <Header text={headerText}/>
      <Description text={explainText}/>
      <DogListContainer />
    </div>
  )
}
