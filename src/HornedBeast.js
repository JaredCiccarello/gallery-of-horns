import React from "react";
class HornedBeast extends React.Component {

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img src={this.props.src}
          alt={this.props.alt}
          title={this.props.title}
        ></img>
        <p>{this.props.alt}</p>
      </article>
    )
  }
};

export default HornedBeast 