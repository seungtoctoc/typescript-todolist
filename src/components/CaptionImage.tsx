import react from 'react'

export type Props = {
    imgUrl: string,
    text: string
}


export default function CaptionImage({imgUrl, text} : Props) {
    // const [count, setCount] = useState<{
    //   value: number,
    //   mutation: number,  
    // }>({value: 0, mutation: 0});

    return (
        <div>
            <img src={imgUrl} alt={text}>
            </img>
        </div>
    )
}