import React from 'react';

function AboutMeAndGamma(props) {
    const { info } = props;

    const textCentered = {
        textAlign: 'center'
    };

    const infoAboutMe = (
        <div style={textCentered}>
            My name is Tatiana. <br></br>
            I study front-end development.
        </div>
    );

    const infoAboutGamma = (
        <div style={textCentered}>
            Since July 2020, the Gamma Intelligence Training Centre has been conducting courses aimed at preparing specialists in the field of cutting-edge digital technologies, including software development, implementation of digital technologies, automation and optimization of business processes, machine learning, data analysis, and computer modeling.
        </div>
    );

    let infoToShow;
    if (info === 'me') {
        infoToShow = infoAboutMe;
    } else if (info === 'gamma') {
        infoToShow = infoAboutGamma;
    }

    return (
        <div>
            {infoToShow}
        </div>
    );
};

export default AboutMeAndGamma;