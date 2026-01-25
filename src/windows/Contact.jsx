import { WindowControls } from '#components';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import React from 'react'

const Contact = () => {
  return (
    <>
    <div id='window-header'>
        <WindowControls target="contact" />
        <h2> Contact me!</h2>
    </div>


   <div className='p-5 space-y-5'>
        <img src="/public/images/adrian-2.jpg" alt="Marko" className='w-20 rounded-full'></img>
        <h3>Let's Connect</h3>
        <p>Špikić je najbolji igrač na svijetu</p>
        <p>demirovicmarko10@gmail.com</p>
        <ul>
            {socials.map(({id, bg, link, icon, text }) => (
                <li key={id} style={{backgroundColor: bg}}>
                    <a href={link} target='_blank' rel="noopener noreferrer">
                        <img src={icon} alt={text} className="size-5" />
                        <p>{text}</p>
                    </a>

                </li>
            
            ))}; 
        </ul>
    </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, 'contact');
export default ContactWindow;