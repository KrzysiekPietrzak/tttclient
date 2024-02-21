import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';


function NavigateToLogin (){
const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("_id")) {
          
            navigate("/login");
          }
        
      }, );      
}
export default NavigateToLogin