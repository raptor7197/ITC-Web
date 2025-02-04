import React from "react"
import CommCard from "./Components/CommCard"
import Members from "./Components/Members"

import SpotlightCard from './Spotlight Card/Spotlight';
  
function createCard(Members){
    return (
        <div className="flex flex-row justify-center mt-12">
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
   <CommCard
    link={Members.link}
    key={Members.id}
    img={Members.img}
    name={Members.name}
    company={Members.comp}
    />
</SpotlightCard>
</div>
   )
}

export default function Committee(){
 return <div>
    <div className="text-green-600 flex flex-row justify-center text-4xl font-bold">Committee</div>
    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">General Chairs</div>
    <div className=''></div>
    </div>
    <div>
        {Members.map(createCard)}
    </div>
    </div>
}