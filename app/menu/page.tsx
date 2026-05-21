import Image from "next/image";
import Link from "next/link";

export default function Menu() {
    return (
        <html>
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
                    <ul className="pratos-lista">
                        <li>Tudo</li>
                        <li>Entradas</li>
                        <li>Grelhados</li>
                        <li>Frutos do Mar</li>
                        <li>Massas</li>
                        <li>Risotos</li>
                        <li>Saladas</li>
                        <li>Sobremesas</li>
                        <li>Sopas</li>
                    </ul>

                    <div className="pratos">
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Entrada/Entrada-CamaraoAoAlho.png"
                                    alt="Entrada de Camarão ao Alho"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Camarão ao Alho</h3>
                                <p>Delicioso porção de camarão salteado com alho.</p>
                                <p>Preço: R$ 35,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Entrada/Entrada-LulaFritaCrocante.png"
                                    alt="Entrada de Lula Frita Crocante"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Lula Frita Crocante</h3>
                                <p>Delicioso porção de lula frita crocante.</p>
                                <p>Preço: R$ 35,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Entrada/Entrada-OstrasFrescas.png"
                                    alt="Entrada de Ostras Frescas"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Ostras Frescas</h3>
                                <p>Deliciosas ostras frescas, servidas com limão.</p>
                                <p>Preço: R$ 40,00</p>
                            </div>  
                        </div>
                    </div>


                    
                
                </main>

            </div>
        </html>
        
    )
}