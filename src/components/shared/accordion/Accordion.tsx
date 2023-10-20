import { useState } from 'react'
import { AccordionProps } from './accordion.props';
import arrowBack from '../../../assets/arrow_back.png'
import arrowUp from '../../../assets/arrow_up.png'
import './accordion.css'




const Accordion = ({title, content}: AccordionProps) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="accordion">
        <div className="accordion-item">
          <div className={`accordion-title`}>
            <div>{title}</div>
            <div onClick={() => setOpen(!open)}>
                <img src={open ? arrowBack : arrowUp} />
            </div>
          </div>
          {open && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    )
}

export default Accordion