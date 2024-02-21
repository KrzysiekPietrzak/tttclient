import NavigateToLogin from "../component/NavigateToLogin"
import logo from "../images/kik.jpg"
function Header(){

    function dea(){
        localStorage.setItem("authenticated",false);
        localStorage.removeItem("_id");
        window.location.reload(false);
      }


      const buttonStyle = {

        float: 'right',
      
      };

      const menuStyle = {

paddingRight: '30px',
fontSize: '2.3em',     
      };


    return(

            <div>
                <NavigateToLogin />
                <img src={logo} width="50px"></img>
                <a style={menuStyle} href="/page">Gra</a>

                <a style={menuStyle} className="menu" href="/howto">Jak grać</a>
                <button onClick={dea} style={buttonStyle}> Wyloguj </button> 

            </div>
        )
        
}
export default Header