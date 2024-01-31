import React from "react";

import Writing from './Writing'

interface Writing {
    id: number;
    title: string;
    body: string;
}

interface Props {
    writings: Writing[];
    deleteWriting: (writing: Writing) => void;
    modifyWriting: (writingToModify: Writing, modifyValue: string) => void;
}

export default function Board(props: Props) {
    const writings = props.writings;
    const deleteWriting = props.deleteWriting;
    const modifyWriting = props.modifyWriting;

    return (
        <div className='container mt-5' style={{zIndex:'1', paddingBottom:'300px'}}>
            {writings.map(writing => (
                <Writing 
                    key={writing.id}
                    writing={writing}
                    deleteWriting={deleteWriting}
                    modifyWriting={modifyWriting}></Writing> 
            ))}
        </div>
    )
}
