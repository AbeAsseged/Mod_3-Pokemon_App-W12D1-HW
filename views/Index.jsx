const React = require("react");
const pokemon = require("../models/pokemon");

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };


    class MyFirstComponent extends React.Component() {
        render(){
        return (
          <div style={myStyle}>
            <h1>Catch Your Pokemon!</h1>
            
        <ul>
            pokemon.map(pokemon, i) 
        </ul>

        <li key={i}>
                  The{' '}
                    <a href={`/fruits/${i}`}>
                      {pokemon.name}
                    </a>
        </li>



            </div>
        )};

        }

     module.exports = Index





//       <div>
//          <h1> Fruits Index Page! </h1>
//          <nav>
//            <a href="/fruits/new">Create a New Fruit</a>
//          </nav>
//          <ul>
//            {
//             fruits.map((fruit, i) => {
//               return (
//                 <li key={i}>
//                   The{' '}
//                     <a href={`/fruits/${i}`}>
//                       {fruit.name}
//                     </a>
//                     {' '}
//                     is {fruit.color} <br></br>
//                     {
//                       fruit.readyToEat ? 
//                         `It is ready to eat`
//                       : 
//                         `It is not ready to eat`
//                     }
//                                       <br />
//                 </li>
//               )
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }

// module.exports = Index 