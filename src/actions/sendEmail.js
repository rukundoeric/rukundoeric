import "regenerator-runtime";
import axios from "axios";

const sendEmail = async (email, htmlToSend) => {
 const { data } = await axios.post(
   `${process.env.REACT_APP_API_SERVER}send`, {email, htmlToSend}, 
 );
 return data;
}
export default sendEmail;