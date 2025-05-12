import { useState } from 'react';
import Head from 'next/head';
import '../../public/styles/LayoutPage.css';

const LayoutPage = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarSubModalColunas, setMostrarSubModalColunas] = useState(false);
  const [mostrarSubModalHorizontal, setMostrarSubModalHorizontal] = useState(false);
  const [mostrarSubModalMisto, setMostrarSubModalMisto] = useState(false);
  const [layoutSelecionado, setLayoutSelecionado] = useState(null);

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
    // Se a opção clicada for a mesma que está selecionada, desmarque
    if (layoutSelecionado === layout) {
      setLayoutSelecionado(null);
    } else {
      setLayoutSelecionado(layout);
    }
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

              {!mostrarSubModalColunas && !mostrarSubModalHorizontal && !mostrarSubModalMisto && (
                <>
                  <button className="botao-modal" onClick={() => setMostrarSubModalColunas(true)}>Colunas</button>
                  <button className="botao-modal" onClick={() => setMostrarSubModalHorizontal(true)}>Horizontal</button>
                  <button className="botao-modal" onClick={() => setMostrarSubModalMisto(true)}>Misto</button>
                </>
              )}

              {mostrarSubModalColunas && (
                <div className="modal-colunas-conteudo">
                  <div className="linha-sublinhada2"></div>
                  <div className="div-cinza">
                    <div className={`opcao-layout ${layoutSelecionado === '1x1' ? 'selecionado' : ''}`} onClick={() => handleLayoutClick('1x1')}>
                      <div className="layout-visual">
                        <div className="caixa"></div>
                      </div>
                    </div>
                    <div className={`opcao-layout ${layoutSelecionado === '1x2' ? 'selecionado' : ''}`} onClick={() => handleLayoutClick('1x2')}>
                      <div className="layout-visual">
                        <div className="caixa"></div>
                        <div className="caixa"></div>
                      </div>
                    </div>
                    <div className={`opcao-layout ${layoutSelecionado === '1x3' ? 'selecionado' : ''}`} onClick={() => handleLayoutClick('1x3')}>
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

              {mostrarSubModalHorizontal && (
                <div className="modal-colunas-conteudo">
                  <div className="linha-sublinhada2"></div>
                  <div className="div-cinza">
                    <div className={`opcao-layout ${layoutSelecionado === 'h-1x1' ? 'selecionado' : ''}`} onClick={() => handleLayoutClick('h-1x1')}>
                      <div className="layout-visual-horizontal">
                        <div className="caixa-horizontal"></div>
                      </div>
                    </div>
                    <div className={`opcao-layout ${layoutSelecionado === 'h-1x2' ? 'selecionado' : ''}`} onClick={() => handleLayoutClick('h-1x2')}>
                      <div className="layout-visual-horizontal">
                        <div className="caixa-horizontal"></div>
                        <div className="caixa-horizontal"></div>
                      </div>
                    </div>
                    <div className={`opcao-layout ${layoutSelecionado === 'h-1x3' ? 'selecionado' : ''}`} onClick={() => handleLayoutClick('h-1x3')}>
                      <div className="layout-visual-horizontal">
                        <div className="caixa-horizontal"></div>
                        <div className="caixa-horizontal"></div>
                        <div className="caixa-horizontal"></div>
                      </div>
                    </div>
                  </div>
                  <div className="botoes">
                    <button className="botao-voltar" onClick={voltarAoModalAnterior}>Voltar</button>
                    <button className="botao-adicionar" onClick={() => alert('Adicionar')}>Adicionar</button>
                  </div>
                </div>
              )}

              {mostrarSubModalMisto && (
                <div className="modal-colunas-conteudo">
                  <div className="linha-sublinhada2"></div>
                  <div className="div-cinza2">
                    <div className={`opcao-layout ${layoutSelecionado === 'm-1' ? 'selecionado' : ''}`} onClick={() => handleLayoutClick('m-1')}>
                      <div className="layout-visual-misto">
                        <div className="caixav-misto"></div>
                        <div className="coluna">
                          <div className="caixah-misto"></div>
                          <div className="caixah-misto"></div>
                        </div>
                      </div>
                    </div>
                    <div className={`opcao-layout ${layoutSelecionado === 'm-2' ? 'selecionado' : ''}`} onClick={() => handleLayoutClick('m-2')}>
                      <div className="layout-visual-misto2">
                        <div className="caixah-misto"></div>
                        <div className="caixah-misto"></div>
                        <div className="caixah-misto"></div>
                        <div className="caixah-misto"></div>
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
