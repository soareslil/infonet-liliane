import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../providers/auth";


const Aula1 = () => {

        const { user } = useAuth();

        function handleSubmit(e) {
                e.preventDefault();
                console.log('vc clicou em enviar!');
        }

        function myAlert() {
                alert("Aguarde, você está sendo redirecionado...")
        };


        return (
                <>
                        <header className="header">

                                <Link to="/user">
                                        <button type="button" onClick={myAlert}>
                                                página inicial
                                        </button>
                                </Link>
                                <p className="LinkHeaderButton">CDT0445 - GÊNEROS DE PRODUÇÃO IMAGÉTICA E AUDIOVISUAL PARA MÍDIAS DIGITAIS - T01 (2021.2)</p>

                        </header>

                        <form onSubmit={handleSubmit}>
                                <div>
                                        <h1 className="title">MEU PROJETO EM MIDIAS DIGITAIS</h1>
                                        <br></br>
                                        <div className="flex-container">
                                                <img className="logo-ufsb" alt="logo-ufsb" src="http://ufsb.edu.br/wp-content/uploads/2015/06/Assinatura-Azul-UFSB-Oficial-Vertical-RGB7.jpg"></img>

                                                <div className="flex-container-p">
                                                        <p id="name"> Bem vindo: {user.name} </p>
                                                        <p id="curso"> Seu curso na UFSB é: {user.curso} </p>
                                                </div>
                                        </div>
                                </div>

                                <div className="aula1-textos-tag-p">

                                        <h3> A SOCIEDADE DO ESPETÁCULO  </h3> <br />
                                        <p className="aula1-capitulos"> Capítulo VII - A negação e o consumo da cultura </p><br />
                                        <p className="aula1-capitulos"> Capítulo  VIII - A ideologia materializada </p><br />
                                        <p> "Todo o tempo consumível da sociedade moderna acaba sendo tratado como matéria prima de novos produtos diversificados, que se impõem no mercado como empregos do tempo socialmente organizados."  Debord, p.152 </p><br />
                                        <p> "Para rebaixar os trabalhadores à condição de produtores e consumidores "livres" do tempo-mercadoria, a condição prévia foi a expropriação violenta do seu tempo. O regresso espetacular do tempo não se tornou possível senão a partir desta primeira despossessão do produtor." Debord, p.159 </p><br />
                                        <p> "Do ponto de vista da frente do bombardeamento publicitário é terminantemente proibido envelhecer. Tratar-se de poupar, em cada qual, um capital-juventude que, por ter sido mediocremente empregado, não pode pretender adquirir a realidade durável e cumulativa do capital financeiro. Esta ausência social da morte é idêntica à ausência social da vida." Debord, p.160 </p><br />
                                        <p> "O tempo é a alienação necessária, como o mostrava Hegel, o meio pela qual o sujeito se realiza perdendo-se, tornando-se outro para se tornar a verdade de si mesmo. Mas o seu contrário é justamente a alienação dominante, que é justamente a alienação dominante, que é suportada pelo produtor de um presente estranho. Nesta alienação espacial, a sociedade que separa na raiz o sujeito e a atividade que ela lhe furta, separa-o antes de tudo do seu próprio tempo. A alienação social superável é justamente aquela que interditou e petrificou as possibilidades e os riscos de alienação viva no tempo." Debord, p.162 </p><br />
                                        <p> "A cultura é a esfera geral do conhecimento e das representações da vivência na sociedade histórica dividida em classes; o que significa dizer que ela é o poder de generalização existente à parte, cisão entre o trabalho intelectual e trabalho dividido." Debord, p.180 </p><br />
                                        <p> "A luta entre a tradição e a inovação, que é o princípio do desenvolvimento interno da cultura das sociedades históricas, não pode ter andamento senão através da vitória permanente da inovação. A inovação na cultura, porém, não vem senão trazida pelo movimento histórico total que, ao tomar consciência da sua totalidade, tende à superação dos seus próprios pressupostos culturais e caminha para a supressão de toda a separação." Debord, p.181  </p><br />
                                        <p> "O progresso dos conhecimentos da sociedade, que contém a compreensão da história como o coração da cultura, adquire por si próprio um conhecimento sem retorno que é expresso pela destruição de Deus. Mas esta condição primeira de toda a crítica é de igual modo a obrigação primeira de uma crítica infinita." Debord, p.182 </p><br />
                                        <p> "A falta de racionalidade da cultura separada é o elemento que a condena a desaparecer, porque, nela, a vitória do racional está já presente como exigência." Debord, p.182 </p><br />
                                        <p> [...] e prevê que a cultura deve desempenhar na segunda metade deste século o papel motor no desenvolvimento da economia, como o automóvel o foi na sua primeira metade, e as ferrovias na segunda metade do século precedente." Debord, p.194  </p><br />
                                        <p> "O próprio pensamento da organização social da aparência está obscurecido pela sub-comunicação generalizada que ele defende. Ele não sabe que o conflito está na origem de todas as coisas do seu mundo. Os especialistas do poder do espetáculo, poder absoluto no interior do seu sistema de linguagem mão única, estão absolutamente corrompidos pela sua experiência do desprezo e do êxito do desprezo; porque reencontram o seu desprezo confirmado pelo conhecimento do homem desprezível que é realmente o espectador." Debord, p.195 </p>

                                </div>









                                <div>
                                        <Link to="/aula2">
                                                <button type="submit" className="submit-user" onClick={myAlert}>
                                                        próxima página
                                                </button>
                                        </Link>
                                </div>
                        </form>
                        <br></br> <br></br>
                        <br></br><br></br>
                        <footer className="footer">
                                <a className="linkFooterButton" href="http://ufsb.edu.br/" target="_blanked">UFSB-OFICIAL</a>
                                <p className="linkFooterButton">Made by Liliane Soares</p>
                        </footer>
                </>
        )
}
export default Aula1;