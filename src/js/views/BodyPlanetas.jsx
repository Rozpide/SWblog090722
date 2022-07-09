import React, { useState, useEffect, useContext } from "react";
import { Spinner } from "../component/spinner.jsx";
import  CardPlanetas  from "../cards/CardPlanetas.jsx";
import { Context } from "../store/appContext";
import Footer from "../component/footer.jsx";

export const BodyPlanetas = () => {

    const { store, actions } = useContext(Context)



    return (
        <>
            <div className="row ">
                {
                    store.planets !== null ?
                        store.planets.results.map((planeta, index) => {
                            let a= store.favorite.filter((item=>item===planeta.name))
                            return <CardPlanetas key={index} planeta={planeta} a={a} />
                        }) :
                        <Spinner />
                }
            </div>
                <Footer />
        </>
    )
}