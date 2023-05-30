export default function List () {
    return (
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
    )
}