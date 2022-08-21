const fs = require("fs");
fs.writeFileSync("biodata.txt", "this is rox from jaipur..\n");
fs.appendFileSync("biodata.txt", ("thq."));
const readdata = fs.readFileSync("biodata.txt", { encoding: "utf-8" });
fs.unlinkSync("C:\celebal\biodata.txt");


const server = http.createServer((req, res) => {
    res.write("we are lerning ");
    res.end();
});
server.listen(3600, () => {
    console.log("server is runing...");
});