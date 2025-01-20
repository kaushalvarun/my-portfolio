import React, { useEffect } from 'react';
import SkillSection from '../components/SkillSection';
import 'devicon/devicon.min.css';
import './styles.css';

function Skills() {
    useEffect(() => {
        document.title = 'Skills | Varun Kaushal';
    }, []);

    const programmingLanguages = [
        { icon: 'devicon-cplusplus-plain', name: 'C++' },
        { icon: 'devicon-dart-plain', name: 'Dart' },
        { icon: 'devicon-python-plain', name: 'Python' },
        { icon: 'devicon-java-plain-wordmark', name: 'Java' },
    ];

    const mobileDevelopment = [
        { icon: 'devicon-flutter-plain', name: 'Flutter' },
        { icon: 'devicon-dart-plain', name: 'Dart' },
        { icon: 'devicon-firebase-plain', name: 'Firebase' },
        { icon: 'devicon-xcode-plain', name: 'XCode' },
    ];

    const webDevelopment = [
        { icon: 'devicon-html5-plain-wordmark', name: 'HTML5' },
        { icon: 'devicon-css3-plain-wordmark', name: 'CSS3' },
        { icon: 'devicon-react-original-wordmark', name: 'React.js' },
        { icon: 'devicon-javascript-plain', name: 'JavaScript' }
    ];

    const versionControl = [
        { icon: 'devicon-git-plain-wordmark', name: 'Git' },
        { icon: 'devicon-github-original', name: 'GitHub', style: { color: '#A078F7' } },
    ];

    const cloudComputing = [
        { icon: 'devicon-amazonwebservices-plain-wordmark', name: 'AWS Cloud Fundamentals' },
        { icon: 'devicon-azure-plain', name: 'Azure AI Fundamentals' }
    ];

    return (
        <div>
            <h1 className='heading'>Skills</h1>
            <div className="skill-section-grid">
                <SkillSection
                    title="Programming"
                    skills={programmingLanguages}
                />
                <SkillSection
                    title="Mobile Development"
                    skills={mobileDevelopment}
                />
                <SkillSection
                    title="Web Development"
                    skills={webDevelopment}
                />
                <SkillSection
                    title="Version Control"
                    skills={versionControl}
                />
                <SkillSection
                    title="Cloud Computing"
                    skills={cloudComputing}
                />
            </div>
        </div>
    );
}

export default Skills;
