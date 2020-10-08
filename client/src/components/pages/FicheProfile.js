import React,{useEffect} from "react";
import PropTypes from "prop-types";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {detailsProduct} from "../../js/action/profileactions";

function FicheProfile({profile}) {
    
   // const profile = useSelector((state) => state.profileReducer.profile);
   const dispatch = useDispatch();

  
   // useEffect(() => {dispatch(detailsProduct(profile.match.params.id))})
    //useEffect(() => {
       // detailsProduct(match.params.id);
     // }, [detailsProduct, match.params.id]);
     
  
     const getProfile = () =>dispatch (detailsProduct(profile.match.params.id));
       
     useEffect(() =>{(getProfile()) },[]);

    return (
        <div >
  
        <h1 >{profile.speciality}</h1>
       </div>
    )
    }
     

export default FicheProfile
