import axios from "axios";
const baseUrl = "http://127.0.0.1:1337/api";
import {Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Link from 'next/link'
import Image from 'next/image';
import mainimg from "../../public/images/class.jpeg"
import Appbar from "./../components/Appbar"
//import { userEmailState } from "../store/selectors/userEmail"
//import {isUserLoading} from "../store/selectors/isUserLoading.js";

 const index = () => {
  
   const userEmail = null;
  const userLoading = null;
    return <div>
        < Appbar />
        <Grid container style={{padding: "5vw"}}>
            <Grid item xs={12} md={6} lg={6}>
                <div style={{marginTop: 100}}>
                    <Typography variant={"h2"}>
                        Coursera Admin
                    </Typography>
                    <Typography variant={"h5"}>
                        A place to learn, earn and grow
                    </Typography>
                  <div style={{display: "flex", marginTop: 20}}>
                        <div style={{marginRight: 10}}>
                        <Link href="/signin">
                            <Button
                                size={"large"}
                                variant={"contained"}
                             
                            >sign-In</Button></Link>
                        </div>
                        <div>
                          <Link href="/signup">
                            <Button
                                size={"large"}
                                variant={"contained"}
                                
                            >Sign-Up</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}  style={{marginTop: 20}}>
                <Image src={mainimg} width={600} height={400} alt="image is loading" />
            </Grid>
        </Grid>
    </div>
}
export default index