import Image from "next/image"

export default function AplicacaoFloat(){
    return (
        <div className="border p-10">
            <Image 
            className="float-left m-2"
            src="/img/pexels-jdm-kuruma-1304609967-30145519.jpg"
            alt="Descrição"
            width={120}
            height={120}
            />

            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, hic.</p>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, hic.</p>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, hic.</p>
        </div>
    )
}