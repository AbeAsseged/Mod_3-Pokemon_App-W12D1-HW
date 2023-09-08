const React = require('react')

class Show extends React.Component {
  render () {
    const { name, img} = this.props.pokemon

    return (
      <div>
        <h1> Catch Your Pokemon</h1>
        <div>
        
         {/* <ul>
            fruits.map(fruit, i) 
        </ul> */}


        </div>
       
        <img src={img} alt="" />
      </div>
    );
  }
}


module.exports = Show;





{/* <div>
         <h1> Fruits Index Page! </h1>
         <nav>
           <a href="/fruits/new">Create a New Fruit</a>
         </nav>
         <ul>
           {
            fruits.map((fruit, i) => {
              return (
                <li key={i}>
                  The{' '}
                    <a href={`/fruits/${i}`}>
                      {fruit.name}
                    </a>
                    {' '}
                    is {fruit.color} <br></br>
                    {
                      fruit.readyToEat ? 
                        `It is ready to eat`
                      : 
                        `It is not ready to eat`
                    }
                                      <br />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index */}