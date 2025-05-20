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
  const [layoutFinal, setLayoutFinal] = useState(null);

  // Estado para imagem de fundo
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
    if (layoutSelecionado === layout) {
      setLayoutSelecionado(null);
    } else {
      setLayoutSelecionado(layout);
    }
  };

  // Função para definir a imagem de fundo (exemplo)
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

      {/* Conteúdo da página com zIndex maior para ficar acima do fundo e botão centralizado */}
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
        <button className="botao-mais" onClick={abrirModal}>
          +
        </button>

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
                    <button
                      className="botao-modal"
                      onClick={() => setMostrarSubModalColunas(true)}
                    >
                      Colunas
                    </button>
                    <button
                      className="botao-modal"
                      onClick={() => setMostrarSubModalHorizontal(true)}
                    >
                      Horizontal
                    </button>
                    <button
                      className="botao-modal"
                      onClick={() => setMostrarSubModalMisto(true)}
                    >
                      Misto
                    </button>
                  </>
                )}

              {mostrarSubModalColunas && (
                <div className="modal-colunas-conteudo">
                  <div className="div-cinza">
                    <div
                      className={`opcao-layout ${
                        layoutSelecionado === '1x1' ? 'selecionado' : ''
                      }`}
                      onClick={() => handleLayoutClick('1x1')}
                    >
                      <div className="layout-visual">
                        <div className="caixa"></div>
                      </div>
                    </div>
                    <div
                      className={`opcao-layout ${
                        layoutSelecionado === '1x2' ? 'selecionado' : ''
                      }`}
                      onClick={() => handleLayoutClick('1x2')}
                    >
                      <div className="layout-visual">
                        <div className="caixa"></div>
                        <div className="caixa"></div>
                      </div>
                    </div>
                    <div
                      className={`opcao-layout ${
                        layoutSelecionado === '1x3' ? 'selecionado' : ''
                      }`}
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
                    <button className="botao-voltar" onClick={voltarAoModalAnterior}>
                      Voltar
                    </button>
                    <button
                      className="botao-adicionar"
                      onClick={() => {
                        setLayoutFinal(layoutSelecionado);
                        setMostrarEditor(true);
                        fecharModal();
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
                    <div
                      className={`opcao-layout ${
                        layoutSelecionado === 'h-1x1' ? 'selecionado' : ''
                      }`}
                      onClick={() => handleLayoutClick('h-1x1')}
                    >
                      <div className="layout-visual-horizontal">
                        <div className="caixa-horizontal"></div>
                      </div>
                    </div>
                    <div
                      className={`opcao-layout ${
                        layoutSelecionado === 'h-1x2' ? 'selecionado' : ''
                      }`}
                      onClick={() => handleLayoutClick('h-1x2')}
                    >
                      <div className="layout-visual-horizontal">
                        <div className="caixa-horizontal"></div>
                        <div className="caixa-horizontal"></div>
                      </div>
                    </div>
                    <div
                      className={`opcao-layout ${
                        layoutSelecionado === 'h-1x3' ? 'selecionado' : ''
                      }`}
                      onClick={() => handleLayoutClick('h-1x3')}
                    >
                      <div className="layout-visual-horizontal">
                        <div className="caixa-horizontal"></div>
                        <div className="caixa-horizontal"></div>
                        <div className="caixa-horizontal"></div>
                      </div>
                    </div>
                  </div>
                  <div className="botoes">
                    <button className="botao-voltar" onClick={voltarAoModalAnterior}>
                      Voltar
                    </button>
                    <button
                      className="botao-adicionar"
                      onClick={() => {
                        setLayoutFinal(layoutSelecionado);
                        setMostrarEditor(true);
                        fecharModal();
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
                    <div
                      className={`opcao-layout ${
                        layoutSelecionado === 'm-1' ? 'selecionado' : ''
                      }`}
                      onClick={() => handleLayoutClick('m-1')}
                    >
                      <div className="layout-visual-misto">
                        <div className="caixav-misto"></div>
                        <div className="coluna">
                          <div className="caixah-misto"></div>
                          <div className="caixah-misto"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`opcao-layout ${
                        layoutSelecionado === 'm-2' ? 'selecionado' : ''
                      }`}
                      onClick={() => handleLayoutClick('m-2')}
                    >
                      <div className="layout-visual-misto2">
                        <div className="caixah-misto"></div>
                        <div className="caixah-misto"></div>
                        <div className="caixah-misto"></div>
                        <div className="caixah-misto"></div>
                      </div>
                    </div>
                  </div>
                  <div className="botoes">
                    <button className="botao-voltar" onClick={voltarAoModalAnterior}>
                      Voltar
                    </button>
                    <button
                      className="botao-adicionar"
                      onClick={() => {
                        setLayoutFinal(layoutSelecionado);
                        setMostrarEditor(true);
                        fecharModal();
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

        {mostrarEditor && (
          <div className="editor-wrapper">
            <TextEditor layout={layoutFinal} />
          </div>
        )}
      </div>
    </>
  );
};

export default LayoutPage;
