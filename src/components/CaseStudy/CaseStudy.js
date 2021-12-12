import React, {useState, useEffect} from 'react'
import './casestudy.css'
import {GPT3, Juniper, Pokedex, Redhawk} from './Projects/index';

const CaseStudy = (props) => {
    
    const [study, setStudy] = useState("");
    
    useEffect(() => {
        setStudy(props.name)
    }, []) //eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <>
           {study === "RedHawk" ? <Redhawk viewMain={props.viewMain}/> : null}
           
           {study === "Pokedex" ? <Pokedex viewMain={props.viewMain} /> : null}
           
           {study === "GPT3" ? <GPT3 viewMain={props.viewMain} /> : null}
           
           {study === "Juniper" ? <Juniper viewMain={props.viewMain} /> : null}
        </>
    )
}

export default CaseStudy;
