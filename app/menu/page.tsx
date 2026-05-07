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
            </main>
        </div>
    )
}