const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// start socket
const { createServer } = require("http");
const { Server: SocketIoServer } = require("socket.io");
const server = createServer(app);


const io = new SocketIoServer(server, {
    cors: { origin: "http://localhost:3000" },
});
//end socket
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" ,credentials :true}));
app.get("/", (request, response) => {
    response.send({ msg: "welcome to homepage" });
});
app.use(express.json());
app.use(cookieParser());
app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/product"));
app.use("/upload", require("./routes/upload"));
mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_HOST}/${process.env.DB_NAME_NEW}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("MonogoDB is connected :sunglasses:");
    })
    .catch((err) => {
        console.log(err);
    });
//start socket
io.on("connection", (socket) => {
    socket.on("message", ({ name, message }) => {
        io.emit("message", { name, message });
    });
});
//end socket
server.listen(5000, () => {
    console.log("Server Started on port 5000");
});
