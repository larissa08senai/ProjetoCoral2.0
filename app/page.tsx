import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        <div className="conteudo">
          <h1 className="Slogan">
            <div className="linha"><div className="F">Fresco.</div><div className="S">Saudável.</div></div>
            <div className="I">Irresistível.</div>
            <br />
            Descubra o sabor do mar com a Coral Food!
          </h1>
          <p className="legenda">
            Descubra os sabores do ocenao no coração da cidade. Marisco fresco, pratos autênticos e uma experiência única
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
