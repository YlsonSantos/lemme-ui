import { useState } from 'react';
import Head from 'next/head';
import '../../public/styles/LayoutPage.css';
import TextEditor from '../components/TextEditor';

const LayoutPage = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarSubModalColunas, setMostrarSubModalColunas] = useState(false);
  const [mostrarSubModalHorizontal, setMostrarSubModalHorizontal] = useState(false);
  const [mostrarSubModalMisto, setMostrarSubModalMisto] = useState(false);
  const [layoutSelecionado, setLayoutSelecionado] = useState(null);
  const [mostrarEditor, setMostrarEditor] = useState(false);
  const [layoutsFinais, setLayoutsFinais] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const abrirModal = () => setMostrarModal(true);
  const fecharModal = () => {
    setMostrarModal(false);
    setMostrarSubModalColunas(false);
    setMostrarSubModalHorizontal(false);
    setMostrarSubModalMisto(false);
  };

  const voltarAoModalAnterior = () => {
    setMostrarSubModalColunas(false);
    setMostrarSubModalHorizontal(false);
    setMostrarSubModalMisto(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      fecharModal();
    }
  };

  const handleLayoutClick = (layout) => {
    setLayoutSelecionado(prev => (prev === layout ? null : layout));
  };

  const setarImagemFundo = (url) => {
    setBackgroundImage(url);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Escolher Layout</title>
      </Head>

      {/* Fundo fixo atrás de todo conteúdo */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Renderiza editores caso mostrarEditor esteja true */}
      {mostrarEditor && (
        <div className="editor-wrapper">
          {layoutsFinais.map((layout, idx) => (
            <TextEditor key={idx} layout={layout} />
          ))}
        </div>
      )}

      <div
        className="pagina-customizacao"
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'white',
        }}
      >
        <button className="botao-mais" onClick={abrirModal}>+</button>

        {mostrarModal && (
          <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-conteudo">
              <h3 className="modal-titulo">
                {mostrarSubModalColunas
                  ? 'Colunas'
                  : mostrarSubModalHorizontal
                  ? 'Horizontal'
                  : mostrarSubModalMisto
                  ? 'Misto'
                  : 'Layout da Página'}
              </h3>
              <div className="linha-sublinhada"></div>

              {!mostrarSubModalColunas &&
                !mostrarSubModalHorizontal &&
                !mostrarSubModalMisto && (
                  <>
                    <button className="botao-modal" onClick={() => setMostrarSubModalColunas(true)}>Colunas</button>
                    <button className="botao-modal" onClick={() => setMostrarSubModalHorizontal(true)}>Horizontal</button>
                    <button className="botao-modal" onClick={() => setMostrarSubModalMisto(true)}>Misto</button>
                  </>
              )}

              {mostrarSubModalColunas && (
                <div className="modal-colunas-conteudo">
                  <div className="div-cinza">
                    {['1x1', '1x2', '1x3'].map(layout => (
                      <div
                        key={layout}
                        className={`opcao-layout ${layoutSelecionado === layout ? 'selecionado' : ''}`}
                        onClick={() => handleLayoutClick(layout)}
                      >
                        <div className="layout-visual">
                          {Array.from({ length: parseInt(layout.split('x')[1]) }).map((_, i) => (
                            <div key={i} className="caixa"></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="botoes">
                    <button className="botao-voltar" onClick={voltarAoModalAnterior}>Voltar</button>
                    <button
                      className="botao-adicionar"
                      onClick={() => {
                        if (layoutSelecionado) {
                          setLayoutsFinais(prev => [...prev, layoutSelecionado]);
                          setMostrarEditor(true);
                          fecharModal();
                        }
                      }}
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              )}

              {mostrarSubModalHorizontal && (
                <div className="modal-colunas-conteudo">
                  <div className="div-cinza">
                    {['h-1x1', 'h-1x2', 'h-1x3'].map(layout => (
                      <div
                        key={layout}
                        className={`opcao-layout ${layoutSelecionado === layout ? 'selecionado' : ''}`}
                        onClick={() => handleLayoutClick(layout)}
                      >
                        <div className="layout-visual-horizontal">
                          {Array.from({ length: parseInt(layout.split('x')[1]) }).map((_, i) => (
                            <div key={i} className="caixa-horizontal"></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="botoes">
                    <button className="botao-voltar" onClick={voltarAoModalAnterior}>Voltar</button>
                    <button
                      className="botao-adicionar"
                      onClick={() => {
                        if (layoutSelecionado) {
                          setLayoutsFinais(prev => [...prev, layoutSelecionado]);
                          setMostrarEditor(true);
                          fecharModal();
                        }
                      }}
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              )}

              {mostrarSubModalMisto && (
                <div className="modal-colunas-conteudo">
                  <div className="div-cinza2">
                    {['m-1', 'm-2'].map(layout => (
                      <div
                        key={layout}
                        className={`opcao-layout ${layoutSelecionado === layout ? 'selecionado' : ''}`}
                        onClick={() => handleLayoutClick(layout)}
                      >
                        <div className={`layout-visual-${layout === 'm-1' ? 'misto' : 'misto2'}`}>
                          {layout === 'm-1' ? (
                            <>
                              <div className="caixav-misto"></div>
                              <div className="coluna">
                                <div className="caixah-misto"></div>
                                <div className="caixah-misto"></div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="caixah-misto"></div>
                              <div className="caixah-misto"></div>
                              <div className="caixah-misto"></div>
                              <div className="caixah-misto"></div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="botoes">
                    <button className="botao-voltar" onClick={voltarAoModalAnterior}>Voltar</button>
                    <button
                      className="botao-adicionar"
                      onClick={() => {
                        if (layoutSelecionado) {
                          setLayoutsFinais(prev => [...prev, layoutSelecionado]);
                          setMostrarEditor(true);
                          fecharModal();
                        }
                      }}
                    >
                      Adicionar
                    </button>
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
