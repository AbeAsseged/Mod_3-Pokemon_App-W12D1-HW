const React = require('react')

class Show extends React.Component {
  render () {
    const { name, img} = this.props.pokemon

    return (
      <div>
        <h1> Catch Your Pokemon</h1>
        <div>


        </div>
       
        <img src={img} alt="" />
      </div>
    );
  }
}


module.exports = Show;



