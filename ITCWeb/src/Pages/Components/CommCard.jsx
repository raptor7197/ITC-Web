import React from "react"

export default function CommCard(props){
    return (
    <a href={props.link}>
    <div className="w-2xs">
        <div>
            <img src={props.img}></img>
        </div>
        <div className='text-green-600 flex flex-row justify-center text-lg font-semibold'>{props.name}</div>
        <div>
            <div className='text-green-600 flex flex-row justify-center text-lg font-semibold'>{props.company}</div>
        </div>
    </div>
    </a>
    );
}

