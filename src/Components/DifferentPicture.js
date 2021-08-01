import React, {useState, connect } from 'react';
// import ImageMap from "image-map";
import Image from '../assets/originals/smallTown-different.jpg';

function DifferentPicture() {

     const [Different, setDifferent] = useState ({
 id: "",
 pictureName :'south-park-characters',
 source: 'http//localhost:3000/originals/south-park-characters.jpg',
 picture: 18,
 alt: 'Differently. Art', 
 itemOneCoords: '694,242,52',
 itemOneShape: 'circle',
 itemOneAlt: 'Kenny', 
 itemTwoCoords: '784,528,67', 
 itemTwoShape: 'circle',
 itemTwoAlt: 'Kyle',
 itemThreeCoords: '772,93,84',
 itemThreeShape: 'circle',
 itemThreeAlt: 'blimp',
 itemFourCoords: '500,149,27',
 itemFourShape: 'circle',
 itemFourAlt: 'Butters',
 itemFiveCoords: '0,162,117,207',
 itemFiveShape: 'rect',
 itemFiveAlt: 'mountaintop'})

 function HandleChange(e){
    setDifferent({...Different, [e.target.name]: [e.target.value = true]})
}

console.log("Different Pic Attributes:", Different)

  return (
<>
<img src={Image} alt="South Park" useMap="#image_map"/>
<map name="image_map">
  <area alt="chimney" name="itemOneFound" title="chimney" href="#" coords="359,92,413,115" shape="rect" onclick={HandleChange}/>
  <area alt="doorTop" name="itemTwoFound" title="doorTop" href="#" coords="470,257,505,285" shape="rect"onclick={HandleChange}/>
  <area alt="missingWindow" name="itemThreeFound" title="missingWindow" href="#" coords="7,190,59,258" shape="rect" onclick={HandleChange}/>
  <area alt="whiteHouseWindow" name="itemFourFound" title="whiteHouseWindow" href="#" coords="235,163,278,189" shape="rect" onclick={HandleChange}/>
  <area alt="kidsShorts" name="itemFiveFound" title="kidsShorts" href="#" coords="380,431,405,454" shape="rect" onclick={HandleChange}/>
</map>

</>
  )
}


export default DifferentPicture;
