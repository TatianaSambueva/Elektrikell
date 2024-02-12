import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function About() {

    const params = useParams();
    const navigate = useNavigate();

    const textCentered = {
        textAlign: 'center'
    };


    console.log('params', params);

    useEffect(() => {
        if (params.id === "999") navigate("/");
    }, [params, navigate]);

    return <>
        <div style={textCentered}>
            This is my first react project.<br></br>
            Here you can look for electricity prices and find the cheapest price for you.<br></br>
            We used the following: react-bootstrap, lodash, API requests, recharts, react (useCallback, useEffect, useParams, useState, useMemo), react-router-dom (useLocation, useParams, useNavigate)
        </div>



    </>;
}

export default About; 