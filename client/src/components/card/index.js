import React from 'react'
import Image from '../image'
import CardBody from '../card_body'
import Button from '../button'
import './index.css'

const Card = (props) => {
  // props.obj = {img: title: }

  // props = {
  //   randomProp: "hello",
  //   random2: true,
  //   obj:   {
  //     img:
  //       "https://images.unsplash.com/photo-1536514072410-5019a3c69182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  //     title: "Santorini",
  //     text:
  //       "This was one of the most amazing places I've ever seen. A must see for eveyrone",
  //     url: "https://unsplash.com/s/photos/santorini"
  //   }
  // }

  console.log("I happen ever rerender");

  let {img, title, text, url} = props.obj;

// props.obj.title
  return (
    <div className="card-container">
        <Image img={img} title={title} />
        <CardBody title={title} text={text}  />
        <Button url={url}  />
    </div>
  )
}

export default Card;
