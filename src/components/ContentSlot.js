/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react';
import { SimpleTextEditor } from './SimpleTextEditor';
import '../../public/styles/ModalEscolha.css';

const ContentSlot = ({ value, onContentChange }) => {
    const [contentType, setContentType] = useState(null);
    const [mostrarModalEscolha, setMostrarModalEscolha] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const fileInputRef = useRef(null);

    const handleEscolha = (tipo) => {
        setContentType(tipo);
        setMostrarModalEscolha(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setMostrarModalEscolha(false);
        }
    };

    const handleTextChange = (JSON) => {
        onContentChange && onContentChange({ type: 'text', content: JSON });
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (event) {
                setImageUrl(event.target.result);
                onContentChange && onContentChange({ type: 'image', content: event.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCustomButtonClick = () => {
        fileInputRef.current.click();
    };

    if (contentType === 'text') {
        return <SimpleTextEditor value={value?.content || '<p></p>'} onContentChange={handleTextChange}/>;
    }

    if (contentType === 'image') {
        return (
            <div className='imagem-wrapper'>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />
                {!imageUrl && (
                    <button
                        className="custom-upload-btn"
                        onClick={handleCustomButtonClick}
                        type="button"
                    >
                        Selecionar Imagem
                    </button>
                )}
                {imageUrl && (
                    <div className="imagem-placeholder">
                        <img src={imageUrl} alt="Preview" className="imagem-crop" />
                    </div>
                )}
            </div>
        );
    }

    return (
        <>
            <div className="content-slot-placeholder">
                <button className="mais-sinal" onClick={() => setMostrarModalEscolha(true)}>+</button>
            </div>

            {mostrarModalEscolha && (
                <div className="modal-conteudo-slot-overlay" onClick={handleOverlayClick}>
                    <div className="modal-conteudo-slot-box">
                        <h3 className="modal-conteudo-slot-titulo">Escolher Conteúdo</h3>
                        <div className="modal-conteudo-slot-linha"></div>
                        <div className="modal-conteudo-slot-botoes">
                            <button className="modal-conteudo-slot-botao" onClick={() => handleEscolha('text')}>Texto</button>
                            <button className="modal-conteudo-slot-botao" onClick={() => handleEscolha('image')}>Imagem</button>
                        </div>
                        <button className="modal-conteudo-slot-cancelar" onClick={() => setMostrarModalEscolha(false)}>Cancelar</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContentSlot;