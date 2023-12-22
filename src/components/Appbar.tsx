import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from 'next/router'



function Appbar({ }) {
    const router = useRouter()


    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
        zIndex: 1
    }}>
        <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
            router.push('/')

        }}>
            <Typography variant={"h6"}>Coursera</Typography>
        </div>



        <div style={{ display: "flex" }}>
            <div style={{ marginRight: 10 }}>

                <Button
                    variant={"outlined"}
                    onClick={() => {
                        router.push('/AddCources')
                    }}
                >Add-cources</Button>
            </div>
            <div style={{ marginRight: 10 }}>

                <Button
                    variant={"outlined"}
                    onClick={() => {
                        router.push('/cources')
                    }}
                >cources</Button>
            </div>
            <div style={{ marginRight: 10 }}>

                <Button
                    variant={"contained"}
                    onClick={() => {
                        router.push('/Signup')
                    }}
                >Signup</Button>
            </div>
            <div>
                <Button
                    variant={"contained"}
                    onClick={() => {
                        router.push('/Signin')
                    }}
                >Signin</Button>
            </div>
        </div>
    </div>

}

export default Appbar;