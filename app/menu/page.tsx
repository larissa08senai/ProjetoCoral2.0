import Image from "next/image";
import Link from "next/link";

export default function Menu() {
    return (
        <div className="principal">
            <main className="inicial">
                <div className="header">
                    <Image
                        className="dark:invert"
                        src="/LogoCoral.png"
                        alt="Coral Food logo"
                        width={100}
                        height={80}
                        priority
                    />
                    <nav>
                        <Link href="/">Inicial</Link>
                        <Link href="/menu">Menu</Link>
                        <Link href="/sobre">Sobre</Link>
                        <Link href="/contato">Contato</Link>
                    </nav>
                </div>
                <hr />
                <div className="pratos">
                    <ul className="pratos-lista">
                        <Link href="/entradas">Entradas</Link>
                        <Link href="/grelhados">Grelhados</Link>
                        <Link href="/mar">Frutos do Mar</Link>
                        <Link href="/massas">Massas</Link>
                        <Link href="/risotos">Risotos</Link>
                        <Link href="/saladas">Saladas</Link>
                        <Link href="/sobremesas">Sobremesas</Link>
                        <Link href="/sopas">Sopas</Link>
                    </ul>
                </div>
            </main>
        </div>
    )
}