import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './Model.module.css'

interface ModalProps {
    open: boolean,
    onClose: () => void,
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
    const dialog = useRef<HTMLDialogElement>(null)
    const modalRoot = document.getElementById('modal');
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (open && dialog.current) {
            dialog.current.showModal();
            timerRef.current = setTimeout(() => {
                if(dialog.current?.open){
                    onClose()
                }
            }, 2000)
        } else if (dialog.current) {
            dialog.current.close();
        }
    
        return () => {
            if(timerRef.current){
                clearTimeout(timerRef.current)
            }
        }
    }, [onClose, open])

    if (!modalRoot) return null; // Ensure modalRoot is not null


    return createPortal(
        <div>
            <dialog
                ref={dialog}
                className={`${styles.modal}`}
                onClose={onClose}
            >
                {children}
            </dialog>

        </div>,
        modalRoot
    )
}

export default Modal