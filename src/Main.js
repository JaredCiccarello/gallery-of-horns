import React from 'react';
import HornedBeastAnimal from './HornedBeast';
import data from './data.json';

class Main extends React.Component {


  render() {

  let HornedBeast = [];
  // We want each animal to be given a component in my HornedBeast array
  // Each item in the array will be called beasts
  data.forEach((beasts) => {

    // Next we need to create an instance of our components out of each beasts and then push it onto the array
    HornedBeast.push(
      <HornedBeastAnimal
        image_url={beasts.image_url}
        title={beasts.title}
        description={beasts.description}
        // We add a key for the _id in data.json
        key={beasts._id}
      />)
  });

    return (
      <main>
        {HornedBeast}
      </main>
    );
  }
}
export default Main;