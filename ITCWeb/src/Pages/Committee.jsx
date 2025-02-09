import React from "react"
import CommCard from "./Components/CommCard"
import * as mem from './Components/Members'


import SpotlightCard from './Spotlight Card/Spotlight';
  
function createCard(mem){
    return (
        <div className="flex flex-row justify-center mt-12 mb-12">
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(13, 114, 62, 0.36)">
   <CommCard
    link={mem.link}
    key={mem.id}
    img={mem.img}
    name={mem.name}
    company={mem.comp}
    />
</SpotlightCard>
</div>
   )
}

export default function Committee(){
 return <div>
    <div className="text-green-600 flex flex-row justify-center text-4xl font-bold ">Committee</div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">General Chairs</div>
        <div className="flex flex-row justify-center space-x-6">
        {mem.default.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Technical Program Co-Chairs (TPC)</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members2.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Tutorial Co-Chairs</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members3.map(createCard)}
    </div>
    </div>
    
    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Industry Test Challenges Co-Chairs</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members4.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Industry Sessions Co-Chairs</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members5.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Academia-Research Track Co-Chairs (ART)</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members6.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Test Reality Check Co-Chairs (TRC)</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members7.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Panel Chair</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members8.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Posters Chair</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members9.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Publication Co-Chairs</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members10.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Fellowship Co-Chairs</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members11.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Finance Chair</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members12.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Communication/Website Co-Chairs</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members13.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Registration Chair</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members14.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Marketing and Conference Management chairs</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members15.map(createCard)}
    </div>
    </div>

    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">TPC Advisory Committee</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members16.map(createCard)}
    </div>
    </div>
    
    <div>
    <div className="text-green-500 flex flex-row justify-center text-3xl font-semibold mt-8">Advisory Committee</div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members17.map(createCard)}
    </div>
    <div className="flex flex-row justify-center space-x-6">
        {mem.members18.map(createCard)}
    </div>
    </div>
        </div>
}