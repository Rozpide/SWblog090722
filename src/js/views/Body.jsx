import React, { useState, useEffect, useContext } from "react";

import { Spinner } from "../component/spinner.jsx";
import { Context } from "../store/appContext";
import Footer from "../component/footer.jsx";
import "../../styles/demo.css";
import CardPersonajes from "../cards/CardPersonajes.jsx";
export const Body = () => {
	const { store, actions } = useContext(Context);

	return (
        <>
            <div className="row">
                {
                    //pregunto si la VARIABLE es distinto a null, no el results que me trae el fetch
                    store.characters !== null ?
                        store.characters.results.map((personaje, index) => {
                            let a=store.favorite.filter((item)=>item===personaje.name);
                            return <CardPersonajes key={index} personaje={personaje} i={index+1} a={a} />
                        })
                        : <Spinner />
                }
            </div>
            <Footer />
        </>)

};
