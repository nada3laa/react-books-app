import React from 'react'
import Services from '../../Components/Services/Services';
import Slider from '../../Components/Slider/Slider';
import Books from '../../Components/SlideBooks/Books';
import {books} from '../../data/books'
import HeadingTitle from '../../Components/Heading-Title/HeadingTitle';

export default function Home() {
  return (
    <div>
        <Slider/>
   <Services/>
   <HeadingTitle title="Most Gifted" />
    <Books data={books}/>
    <HeadingTitle title="Best Seller"/>
    <Books data={books}/>
    <HeadingTitle title="Most Wished For "/>
    <Books data={books}/>
    </div>
  )
}
