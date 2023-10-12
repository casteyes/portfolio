import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSections from '../Components/SkillsSections';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg'
import {motion} from 'framer-motion';

function AboutPage() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity:1 }} exit={{opacity: 0}} className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skils-container">
                <SkillsSections skill={'Javascript'} progress={'70%'} width={'70%'}/>
                <SkillsSections skill={'React'} progress={'70%'} width={'70%'}/>
                <SkillsSections skill={'Node.js'} progress={'80%'} width={'80%'}/>
                <SkillsSections skill={'SQL'} progress={'70%'} width={'70%'}/>
                <SkillsSections skill={'.NET'} progress={'70%'} width={'70%'}/>
                <SkillsSections skill={'C#'} progress={'70%'} width={'70%'}/>
                <SkillsSections skill={'Java'} progress={'60%'} width={'60%'}/>
                <SkillsSections skill={'HTML5'} progress={'95%'} width={'95%'}/>
                <SkillsSections skill={'CSS3'} progress={'90%'} width={'90%'}/>
                <SkillsSections skill={'SCSS'} progress={'85%'} width={'85%'}/>
                <SkillsSections skill={'GIT'} progress={'90%'} width={'90%'}/>
                <SkillsSections skill={'Typescript'} progress={'60%'} width={'60%'}/>
            </div>
            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Front-end Technology'} text={'HTML5, SCSS ,CSS3, Javascript, React'}/>
                <ServicesSection image={design} title={'Back-end Development'} text={'.NET, C#, Java, Node.js, Linux Command Line'}/>
                <ServicesSection image={design} title={'Database and Cache'} text={'SQL(Structed Query Language), MySQL, Azure'}/>
            </div>
        </motion.div>
    )
}

export default AboutPage;
