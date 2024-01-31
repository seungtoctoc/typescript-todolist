import React from "react";

import WritingView from './WritingView'
import {Writing} from '../App'

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
                <WritingView
                    key={writing.id}
                    writing={writing}
                    deleteWriting={deleteWriting}
                    modifyWriting={modifyWriting}></WritingView> 
            ))}
        </div>
    )
}
