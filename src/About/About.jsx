import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";


function About() {
    // const location = useLocation();
    const { who } = useParams();
    // const navigate = useNavigate();


    // console.log('params', params);

    // useEffect(() => {
    //     if (params.id === "999") navigate("/");
    // }, [params, navigate]);

    if (who === 'me') return <>About me</>;
    if (who === 'gamma') return <>Gamma Intelligence</>
    return <>About component</>;
}

export default About; 