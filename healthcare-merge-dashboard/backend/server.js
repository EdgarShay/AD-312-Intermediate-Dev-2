const express = require("express");

const cors = require("cors");

const mergeLists =
    require("./src/mergeLists");

const buildList =
    require("./src/buildLists");

const data =
    require("./src/data");

const app = express();

app.use(cors());

app.use(express.json());

const list1 =
    buildList(data.healthMerge);

const list2 =
    buildList(data.carePlus);

let merged =
    mergeLists(list1, list2);

function toArray(head) {

    const arr = [];

    while (head) {

        arr.push({
            ssn: head.ssn,
            age: head.age,
            fullName: head.fullName,
        });

        head = head.next;
    }

    return arr;
}

app.get("/patients", (req, res) => {

    res.json(toArray(merged));
});

app.listen(5000, () => {

    console.log(
        "Server running on port 5000"
    );
});