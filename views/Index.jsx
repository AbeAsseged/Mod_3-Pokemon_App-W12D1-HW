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
