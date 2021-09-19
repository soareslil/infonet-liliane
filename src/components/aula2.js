import React from 'react';
import { Link } from 'react-router-dom';

const Aula2 = () => {


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
                            <p id="name">{`Bem vindx: ${localStorage.getItem("NameLocalStorage")}`}</p>
                            <p id="curso">{`Seu curso na UFSB é: ${localStorage.getItem("CursoLocalStorage")}`}</p>
                        </div>
                    </div>
                    <br></br> <br></br>

                    <h1>FOTOGRAFIAS E FILTROS</h1><br />
                </div>

                <div>

                    <h2> VHS </h2>

                    <p> <b> Video Home System:</b> </p>
                    <p>  O Video Home System (VHS, ou "Sistema Doméstico de Vídeo", em português) é um padrão comercial para consumidores de gravação analógica em fitas de videoteipe. O sistema foi desenvolvido pela Victor Company of Japan (JVC). <br />

                        Em meados de 1950, a gravação em fita magnética se tornou um grande contribuidor para a indústria de televisão, por vias dos primeiros video tape recorders (conhecidos como VTRs). Naquele período, os dispositivos eram usados apenas para caros ambientes profissionais como estúdios de televisão, e em ambientes médicos (fluoroscopia). Nos anos 1970, o videotape começou a ser utilizado de forma caseira, criando a indústria de home video, fazendo alterações nos negócios de televisão e filmes. A indústria de televisão via os VCRs como rivais de seu negócio, enquanto os telespectadores apenas viam no VCR uma forma de "ter controle" de seus hobbies. <br />

                        Em 1980 e 1990, com o VHS no pico de sua popularidade, ocorreu-se a guerra do formato do videocassete na indústria de vídeos caseiros. Dois dos formatos, o VHS e o Betamax, receberam maior destaque na mídia. Todavia, o VHS ganhou a guerra, se consolidando como o maior e mais predominante formato de vídeos caseiros de seu período.
                    </p> <p><b> Referências:</b> https://pt.wikipedia.org/wiki/Video_Home_System  </p><br />

                    <img className="logo-ufsb" alt="foto-filtro-fractal" src="https://64.media.tumblr.com/27355dda832152456b9078dc66423e5c/5ba02d5f8652fc5c-f1/s1280x1920/3989635fc36ae9996dca7083fd8acd13e64ec56b.jpg"></img>
                    <br />

                    <h2> FRACTAL </h2>

                    <p> Fractal (do latim fractu: fração, quebrado) é uma figura da geometria não clássica muito encontrada na natureza, isto é, um objeto em que suas partes separadas repetem os traços (a aparência) do todo completo (padrão repetitivo), como por exemplo na Brassica oleracea e no floco de neve de Koch.[1] O termo, criado em 1975 por Benoît Mandelbrot, é uma tentativa de se medir o tamanho de objetos para os quais as definições tradicionais da geometria euclidiana falham. <br />


                        A geometria fractal é o ramo da matemática que estuda as propriedades e o comportamento dos fractais. Descreve muitas situações que não podem ser explicadas facilmente pela geometria clássica, e foram aplicadas em ciência, em tecnologia e em arte gerada por computador. <br />

                        Um fractal é um objeto geométrico que pode ser dividido em partes, cada uma das quais semelhante ao objeto original. Diz-se que os fractais têm infinitos detalhes, são geralmente auto similares e de escala. Em muitos casos um fractal pode ser gerado por um padrão repetido, tipicamente um processo recorrente ou iterativo.
                    </p>

                    <p> Referências: https://pt.wikipedia.org/wiki/Fractal  </p> <br />

                    <img className="logo-ufsb" alt="foto-filtro-fractal" src="https://64.media.tumblr.com/4be3f61a61a254c6a0443993d9ffdc4b/572a6d4403ee8d99-12/s1280x1920/83d6caf54c25b4a7030be0a1453d4309e8bf984c.jpg"></img>

                    <h2> POLAROID </h2>

                    <p> A Câmera instantânea é um tipo de câmera fotográfica que revela instantaneamente a imagem. As mais conhecidas entre elas são a Câmera Polaroid e as câmeras Fujifilm e Kodak. </p> <br />

                    <p> A Polaroid Corporation tornou-se mundialmente conhecida em 1948 devido ao surgimento da primeira câmera instantânea criada por Edwin H. Land. Em 1986 derrotou a concorrente Kodak em uma batalha de patentes e forçou sua saída do mercado de câmeras instantâneas.

                        A empresa, posteriormente, desenvolveu um sistema de filmes para cinema instantâneo, o Polavision, mas o sistema entrou tardiamente no mercado, assim como também foi frustrada a entrada no mercado das câmeras digitais.
                    </p>


                    <p> Referências: https://pt.wikipedia.org/wiki/C%C3%A2mera_instant%C3%A2nea  </p> <br />

                    <img className="logo-ufsb" alt="polaroid" src="https://64.media.tumblr.com/20d457f16e7ea4f36d9eaf1afb3c37ed/4cedf16e6baed780-f6/s1280x1920/ebf0f828544f826adde34cb70188997e1e50fc80.jpg"></img> <br />

                    <h2> RETRO </h2>

                    <p> Retrô ou Retro é um estilo cultural desatualizado ou velho, uma tendência, hábito, ou moda do passado pós-moderno global, mas que com o tempo se tornam funcionalmente ou superficialmente a norma mais uma vez. </p> <br />

                    <p> O estilo agora chamado de "arte retro" é um gênero de arte pop, que foi desenvolvido nos anos 1940 e 1950, em resposta a uma necessidade de negrito, os gráficos atraentes que eram fáceis de reproduzir em prensas simples disponível na época nos grandes centros. Retro arte publicitária experimentou um ressurgimento na popularidade desde o seu estilo é distinto do estilo geradas por computadores modernos. </p>
                    <p> <b>Referências:</b> https://pt.wikipedia.org/wiki/Retr%C3%B4 </p><br/>

                    <img className="logo-ufsb" alt="retro" src="https://64.media.tumblr.com/d9e5c82d73e2a976b7799c138f1d1a0d/4cedf16e6baed780-e8/s1280x1920/a161c8c4501b3855db9cf34daab36da038742a09.jpg"></img> <br />














                </div>



















                <div>
                    <Link to="/aula3">
                        <button type="submit" className="submit-user" onClick={myAlert}>
                            próxima página
                        </button>
                    </Link>
                </div>
            </form>
            <br></br> <br></br>
            <br></br><br></br>

            <footer className="footer">
                <a align-right className="linkFooterButton" href="http://ufsb.edu.br/" target="_blanked">UFSB-OFICIAL</a>
                <p className="linkFooterButton">Made by Liliane Soares</p>
            </footer>

        </>
    )
}

export default Aula2;
