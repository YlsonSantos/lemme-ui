import { useState } from 'react';
import Head from 'next/head';
import '../../public/styles/LayoutPage.css';

const LayoutPage = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarSubModal, setMostrarSubModal] = useState(false);
  const [layoutSelecionado, setLayoutSelecionado] = useState(null);

  const abrirModal = () => setMostrarModal(true);
  const fecharModal = () => {
    setMostrarModal(false);
    setMostrarSubModal(false);
  };

  const voltarAoModalAnterior = () => {
    setMostrarSubModal(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      fecharModal();
    }
  };

  const handleLayoutClick = (layout) => {
    setLayoutSelecionado(layout);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Escolher Layout</title>
      </Head>

      <div className="pagina-customizacao">
        <div className="conteudo-central">
          <button className="botao-mais" onClick={abrirModal}>+</button>
        </div>

        {mostrarModal && (
          <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-conteudo">
              <h3 className="modal-titulo">{mostrarSubModal ? 'Colunas' : 'Layout da Página'}</h3>
              <div className="linha-sublinhada"></div>

              {!mostrarSubModal ? (
                <>
                  <button className="botao-modal" onClick={() => setMostrarSubModal(true)}>Colunas</button>
                  <button className="botao-modal" onClick={() => alert('Horizontal')}>Horizontal</button>
                  <button className="botao-modal" onClick={() => alert('Misto')}>Misto</button>
                </>
              ) : (
                <div className="modal-colunas-conteudo">
                  <div className="linha-sublinhada2"></div>
                  <div className="div-cinza">
                    <div 
                      className={`opcao-layout ${layoutSelecionado === '1x1' ? 'selecionado' : ''}`} 
                      onClick={() => handleLayoutClick('1x1')}
                    >
                      <div className="layout-visual">
                        <div className="caixa"></div>
                      </div>
                    </div>
                    <div 
                      className={`opcao-layout ${layoutSelecionado === '1x2' ? 'selecionado' : ''}`} 
                      onClick={() => handleLayoutClick('1x2')}
                    >
                      <div className="layout-visual">
                        <div className="caixa"></div>
                        <div className="caixa"></div>
                      </div>
                    </div>
                    <div 
                      className={`opcao-layout ${layoutSelecionado === '1x3' ? 'selecionado' : ''}`} 
                      onClick={() => handleLayoutClick('1x3')}
                    >
                      <div className="layout-visual">
                        <div className="caixa"></div>
                        <div className="caixa"></div>
                        <div className="caixa"></div>
                      </div>
                    </div>
                  </div>

                  <div className="botoes">
                    <button className="botao-voltar" onClick={voltarAoModalAnterior}>Voltar</button>
                    <button className="botao-adicionar" onClick={() => alert('Adicionar')}>Adicionar</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LayoutPage;
