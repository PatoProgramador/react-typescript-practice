import { useEffect, useState } from 'react';
import './App.css';

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

interface Sub {
  nick: string,
  avatar: string,
  subMonths: number,
  description?: string
}

function App() {

  const [subs, setSubs] = useState<Array<Sub>>([]);

  useEffect(() => {
    setSubs(inital_state)
  }, [])

  return (
    <div className="App">
      <h1>subs</h1>
      <ul>
        {
          subs.map((sub, index)=> {
            return (
              <li key={index}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0,100)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
