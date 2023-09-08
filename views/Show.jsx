const React = require('react')

class Show extends React.Component {
  render () {
    const { name, img} = this.props.pokemon

    return (
      <div>
        <h1> Gotta Catch 'Em All</h1>
        <div>
        <h2>
        <li key={i}>
                  The{' '}
                    <a href={`/fruits/${i}`}>
                      {pokemon.name}
                    </a>
        </li>
    </h2>
    

    <a href="/pokemon/">back</a>

        </div>
       
        <img src={img} alt=".jpg" />
      </div>
    );
  }
}


module.exports = Show;



