import React from "react";
// This file is not used anywhere and therefore is automatically applied. Similiar to app.css
import './HornedBeast.css'


class HornedBeast extends React.Component {

  render() {
    return (
      <article className="hornedbeast">
        {/* Things that look like HTML are our JSX content */}
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url}
          alt={this.props.alt}
          title={this.props.title}
          />
        <p>{this.props.alt}</p>
      </article>
    )
  }
};

export default HornedBeast 