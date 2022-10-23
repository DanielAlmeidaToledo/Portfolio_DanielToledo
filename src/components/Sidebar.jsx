import SocialNetWorks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/DanielToledo.jpg'
import CV from '../img/CVDanielToledo.pdf'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return (
        <aside id='sidebar'>
            <img src={Avatar}></img>
            <p className="title">Desenvolvedor Front-end</p>
            <SocialNetWorks />
            <InformationContainer />
            <a href={CV} download={CV} className='btn'>
                Download Currículo
            </a>
        </aside>
    )
}

export default Sidebar