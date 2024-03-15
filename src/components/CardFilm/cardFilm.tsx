import Image from "next/image";
import "./styles.css";
import CardFilmProps from "./interfaces";


export default function (props: CardFilmProps) {
    return(
        <>  
            <div className="card">
                <h2>{props.title}</h2>
                <Image className="image" src={props.image} alt='Imagem do cartaz do filme' width={220} height={300}/>
                <a className="bg-cyan-950" href={props.link}>Trailer</a>
            </div>
        </>
    )
}