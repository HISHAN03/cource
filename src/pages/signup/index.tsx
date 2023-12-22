import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from 'next/router'
import axios from 'axios';
function signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const router = useRouter()
    return <div>
        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
                Welcome to Coursera. Sign up below
            </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
                <TextField
                    onChange={(e) => {
                        let elemt = e.target;
                        setEmail(elemt.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br /><br />
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br /><br />

                <Button
                    size={"large"}
                    variant="contained"

                    onClick={() => {
                        const userdata = {
                            name: email,
                            password: password
                        }
                        axios({
                            method: 'post',
                            url: '/api/signup',
                            data: userdata,
                        })
                            .then(function (response) {
                                console.log(response.data);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });



                    }}

                > signup</Button>
                <Button onClick={() => { router.push('/') }}>back</Button>
            </Card>
        </div>
    </div>
}

export default signup;