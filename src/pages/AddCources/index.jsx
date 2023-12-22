import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Card} from "@mui/material";
import {useState} from "react";
import axios from "axios";

function AddCourse() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0)

    return <div style={{display: "flex", justifyContent: "center", minHeight: "80vh", justifyContent: "center", flexDirection: "column"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card varint={"outlined"} style={{width: 400, padding: 20, marginTop: 30, height: "100%"}}>
                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                />

                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    fullWidth={true}
                    label="Description"
                    variant="outlined"
                />

                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setImage(e.target.value)
                    }}
                    fullWidth={true}
                    label="Image link"
                    variant="outlined"
                />

                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                    fullWidth={true}
                    label="Price"
                    variant="outlined"
                />

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async () => {
                        await axios.post(`api/courses`, {
                            title: title,
                                description: description,
                                imageLink: image,
                                published: true,
                                price
                        }
                           
                        );
                        alert("Added course!");
                    }}
                > Add course</Button>
            </Card>
        </div>
    </div>
}

export default AddCourse;