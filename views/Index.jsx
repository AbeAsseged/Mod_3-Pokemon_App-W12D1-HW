const React = require("react")


class Index extends React.Component {
  render() {
    const { pokemon } = this.props
    return(
      <div>
        <h1> Pokemon Index Page </h1>
        <nav>
          <a href="/pokemon/new">Create a New Pokemon</a>
        </nav>
        <ul>
          {
            pokemon.map((pokemon, i) => {
              return (
                <li key={i}>
                  The{' '}
                  {/* <a href={`/fruits/${pokemon._id}`}>  */}
                    <a href={`/pokemon/${i}`}> for w/out mongoDb W12D1-2 not for for W12D3
                      {pokemon.name}
                    </a>
                   
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index


















// const React = require("react");
// const pokemon = require("../models/pokemon");

// const myStyle = {
//     color: '#ffffff',
//     backgroundColor: '#000000',
//     };


//     class MyFirstComponent extends React.Component() {
//         render(){
//         return (
//           <div style={myStyle}>
//             <h1>Catch Your Pokemon!</h1>
            
//         <ul>
//             pokemon.map(pokemon, i) 
//         </ul>

//         <li key={i}>
//                   The{' '}
//                     <a href={`/fruits/${i}`}>
//                       {pokemon.name}
//                     </a>
//         </li>



//             </div>
//         )};

//         }

//      module.exports = Index
