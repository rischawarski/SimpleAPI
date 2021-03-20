var port = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var Family = {
    member:[
        {
            id:1,
            name:"Richardson Schawarski Cruz",
            job:"Programmer"
        },
        {
            id:2,
            name:"Michele Fernanda Spalir Schawarski",
            job:"Secretary"
        },
        {
            id:3,
            name:"Thayla Spalir Schawarski ",
            job:"student"
        },
        {
            id:4,
            name:"Nelson Schawarski Cruz",
            job:"Photographer"
        },
        {
            id:5,
            name:"Vera Lucia Vieira Dias Schawarski",
            job:"accountant"
        },
        {
            id:6,
            name:"Rebeka Schawarski Cruz",
            job:"Health area"
        },
    ]
}
// Show all Family
app.get('/members', (req, res) => {
    res.json(Family);
});
// List one Member
app.get('/member/:id', (req, res) => {
        if(isNaN(req.params.id)){
            res.sendStatus(404);
        }else{
            var id = parseInt(req.params.id);
            var oneMember = Family.member.find(m => m.id == id);
            res.sendStatus = 200;
            res.json(oneMember);
        }
});
// Create a new Member
app.post('/member', (req, res) => {
    var {id,name,job} = req.body;
    Family.member.push({
        id,
        name,
        job
    });
    res.sendStatus(200);
});
// Edit a Member
app.put('/member/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var member = Family.member.find(m => m.id === id);
        if(member !=undefined){
            var {id,name,job} = req.body;
        }
        if(member.id !=undefined){
            member.id = id;
        }
        if(member.name !=undefined){
            member.name = name;
        }
        if(member.job !=undefined){
            member.job = job;
        }
        res.sendStatus(200);
    }
});
// Delete a Member
app.delete('/member/:id', (req, res) => {
        if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var index = Family.member.findIndex(m => m.id === id);  
        Family.member.splice(index,1);
        res.sendStatus(200);
    }
});

app.listen(port, () => {
    console.log(`Server connected to port: ${port}`);
});
