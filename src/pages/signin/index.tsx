import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router'

function Signin() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSignIn = async () => {
        try {
            const userData = {
                name: email,
                password: password
            };

            const response = await axios.post('/api/signin', userData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return <div>
        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
                Welcome to Coursera. Sign In below
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

                    onClick={handleSignIn}

                > sign-in</Button>
                <Button onClick={() => { router.push('/') }}>back</Button>
            </Card>
        </div>
    </div>
}

export default Signin;