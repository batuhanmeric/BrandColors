import React from 'react'
import {useState} from 'react'
import Modal from 'react-modal'
import { GrClose } from 'react-icons/gr'


function Sidebar(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleModal = () => {
        setModalIsOpen( !modalIsOpen);
    }

    return (
       

            <>
              <aside className = "sidebar">
              <div className = "logo">
                   <a>Brand<b>Colors</b></a>
               </div>

               <div className = "description">
                   The biggest collection  of offical brand color codes around. Curated by @brandcolors and friends.
               </div>

               <nav className = "menu">
                   <ul>
                       <li>
                           <a onClick = {toggleModal}>About BrandColors</a>
                       </li>
                   </ul>
               </nav>
              </aside>

     <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
     >
       
        
        <button className = "modal-close-btn" onClick={toggleModal}>
           <GrClose/>
        </button>
        <h3>About BrandColors</h3>
        <p>
            BrandColors was created by DesignBombs.
        </p>
        <p>
            It's been featured by Smashing Magazine, CSS-Tricks, Web design depot
        </p>

     </Modal>
             
            </>
            
        
    )
}

export default Sidebar
