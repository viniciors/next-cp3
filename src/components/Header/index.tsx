import Image from "next/image";
import "./styles.css";

const Header = () => {
    return(
        <>
        <header className="flex">
            <Image className="icone"src="/icone.jpg" alt="Logo da empresa" width={180} height={200}/>
            <h1>Os melhores filmes estão aqui</h1>
            
        </header>
        </>
    );

};

export default Header;