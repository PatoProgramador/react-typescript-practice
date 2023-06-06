import { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List'
import Form from './components/Form'
import { Sub } from './types'

const inital_state = [
  {
    nick: 'pato',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=pato',
    description: 'An random pato of a random place'
  },
  {
    nick: 'sergio',
    subMonths: 5,
    avatar: 'https://i.pravatar.cc/150?u=sergio',
  }
] 

interface AppState {
  subs: Array<Sub>
  newSubs: number
}

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSub, setNewSub] = useState<AppState["newSubs"]>(0)

  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(inital_state)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
