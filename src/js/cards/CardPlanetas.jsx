import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanetas = (props) => {
    const { store, actions } = useContext(Context)
    console.log(props)
    return (
        <div className="col-md-3 my-4 ">
            <div className="card">
                <img src={`https://starwars-visualguide.com/#/planets/${props.planeta.url.replace("http://swapi.tech/api/planets/", "").replace("/", "")}.jpg`} className="card-img-top" id="fotoHeaderCard" />
                <div className="card-body" id="cardBodyPlanetas">
                    <h5 className="card-title text-center"><ins>{props.planeta.name}</ins></h5>
                    <p className="card-text"><b>Climate:</b> {props.planeta.climate}</p>
                    <p className="card-text"><b>Gravity:</b> {props.planeta.gravity}</p>
                    <p className="card-text"><b>Terrain:</b> {props.planeta.terrain}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/planeta/${props.planeta.url.replace("http://swapi.tech/api/planets/", "").replace("/", "")}`} className="btn btn-outline-primary" personaje={props}>Learn More!</Link>

                    {
                        props.a.length>0?
                        <button className="btn btn-outline-warning float-right corazonActivo" onClick={()=>actions.removeFavorite(props.planeta.name)}><i className="far fa-heart" ></i></button>
                        :
                        <button className="btn btn-outline-warning float-right" onClick={(e)=>actions.addFavorite(props.planeta.name, e)}><i className="far fa-heart" ></i></button>

                        
                    }
                </div>
            </div>
        </div>
    )
}
export default withRouter(CardPlanetas)