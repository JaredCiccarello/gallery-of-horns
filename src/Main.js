import React from 'react';
import HornedBeast from './HornedBeast';
class Main extends React.Component {

  render() {
    return (
      <main>
        <main>
          <HornedBeast src='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' title='Rhinos' alt='Rhinos' />
          <HornedBeast />
        </main>
      </main>
    );
  }
}

export default Main