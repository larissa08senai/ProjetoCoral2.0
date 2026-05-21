import Image from "next/image";
import Link from "next/link";
import { ScrollRef } from "next/dist/shared/lib/app-router-types";

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
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Entrada/Entrada-TartarDeAtum.png"
                                    alt="Entrada de Tartar de Atum"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Tartar de Atum</h3>
                                <p>Delicioso tartar de atum, servido com legumes.</p>
                                <p>Preço: R$ 35,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Grelhados/Grelhados-CaudaDeLagosta.png"
                                    alt="Grelhados de Cauda de Lagosta"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Cauda de Lagosta</h3>
                                <p>Deliciosa cauda de lagosta grelhada, servida com manteiga.</p>
                                <p>Preço: R$ 50,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Grelhados/Grelhados-GrelhadoMisto.png"
                                    alt="Grelhados Misto"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Grelhado Misto</h3>
                                <p>Delicioso grelhado misto, servido com legumes.</p>
                                <p>Preço: R$ 45,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Grelhados/Grelhados-PolvoGrelhado.png"
                                    alt="Grelhados de Polvo Grelhado"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Polvo Grelhado</h3>
                                <p>Delicioso polvo grelhado, servido com legumes.</p>
                                <p>Preço: R$ 40,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Mar/Mar-ArrozDeFrutosDoMar.png"
                                    alt="Arroz de Frutos do Mar"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Arroz de Frutos do Mar</h3>
                                <p>Delicioso arroz de frutos do mar, servido com legumes.</p>
                                <p>Preço: R$ 45,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Mar/Mar-CamaraoNaMoranga.png"
                                    alt="Camarão na Moranga"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Camarão na Moranga</h3>
                                <p>Delicioso camarão na moranga, servido com legumes.</p>
                                <p>Preço: R$ 50,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Mar/Mar-MoquecaDePeixe.png"
                                    alt="Moqueca de Peixe"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Moqueca de Peixe</h3>
                                <p>Delicioso moqueca de peixe, servido com legumes.</p>
                                <p>Preço: R$ 45,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Mar/Mar-PeixeGrelhado.png"
                                    alt="Peixe Grelhado"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Peixe Grelhado</h3>
                                <p>Delicioso peixe grelhado, servido com legumes.</p>
                                <p>Preço: R$ 40,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Mar/Mar-SalmaoGrelhado.png"
                                    alt="Salmão Grelhado"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Salmão Grelhado</h3>
                                <p>Delicioso salmão grelhado, servido com legumes.</p>
                                <p>Preço: R$ 50,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Massas/Massa-EspaguettComFrutosDoMar.png"
                                    alt="Espaguetti com Frutos do Mar"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Espaguetti com Frutos do Mar</h3>
                                <p>Delicioso espaguetti com frutos do mar, servido com legumes.</p>
                                <p>Preço: R$ 45,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Massas/Massa-FettuccineAoMolhoBrancoComSalmao.png"
                                    alt="Fettuccine ao Molho Branco com Salmão"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Fettuccine ao Molho Branco com Salmão</h3>
                                <p>Delicioso fettuccine ao molho branco com salmão, servido com legumes.</p>
                                <p>Preço: R$ 50,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Risotos/Risoto-RisotoDePeixeComLimao.png"
                                    alt="Risoto de Peixe com Limão"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Risoto de Peixe com Limão</h3>
                                <p>Delicioso risoto de peixe com limão, servido com legumes.</p>
                                <p>Preço: R$ 45,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Risotos/Risoto-RisotoDeCamarao.png"
                                    alt="Risoto de Camarão"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Risoto de Camarão</h3>
                                <p>Delicioso risoto de camarão, servido com legumes.</p>
                                <p>Preço: R$ 50,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Saladas/Salada-SaladaDeCamarao.png"
                                    alt="Salada de Camarão"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Salada de Camarão</h3>
                                <p>Deliciosa salada de camarão, servida com legumes.</p>
                                <p>Preço: R$ 45,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Saladas/Salada-SaladaTropical.png"
                                    alt="Salada Tropical"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Salada Tropical</h3>
                                <p>Deliciosa salada tropical, servida com legumes.</p>
                                <p>Preço: R$ 45,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Sobremesas/Sobremesas-CheesecakeDeFrutasVermelhas.png"
                                    alt="Cheesecake de Frutas Vermelhas"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Cheesecake de Frutas Vermelhas</h3>
                                <p>Deliciosa cheesecake de frutas vermelhas.</p>
                                <p>Preço: R$ 45,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Sobremesas/Sobremesas-MousseDeMaracuja.png"
                                    alt="Mousse de Maracujá"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Mousse de Maracujá</h3>
                                <p>Deliciosa mousse de maracujá.</p>
                                <p>Preço: R$ 45,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Sobremesas/Sobremesas-PetitGateau.png"
                                    alt="Petit Gâteau"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Petit Gâteau</h3>
                                <p>Deliciosa petit gâteau.</p>
                                <p>Preço: R$ 45,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Sopas/Sopa-BisqueDeLagosta.png"
                                    alt="Bisque de Lagosta"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Bisque de Lagosta</h3>
                                <p>Deliciosa bisque de lagosta.</p>
                                <p>Preço: R$ 45,00</p>
                            </div>  
                        </div>
                        <div className="prato-card">
                            <div className="prato-imagem">
                                <Image
                                    src="/Sopas/Sopa-CaldoDeFrutosDoMar.png"
                                    alt="Caldo de Frutos do Mar"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="prato-info">
                                <h3>Caldo de Frutos do Mar</h3>
                                <p>Delicioso caldo de frutos do mar.</p>
                                <p>Preço: R$ 45,00</p>
                            </div>  
                        </div>    
                    </div>
                </main>

            </div>
        </html>
        
    )
}