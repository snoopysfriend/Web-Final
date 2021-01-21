import React, { useState, useEffect } from 'react';
import axios from 'axios' 

import { Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { TextField, Button } from '../../components/self-defined/index'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function QA(props) {
    var userId = window.localStorage.getItem('user');
    var isLogin = true;
    var courseId = "10051";
    const classes = useStyles();
    const [isOpen, setisOpen] = useState([]);
    const [originData, setOriginData] = useState([]);
    const [ansInput, setAnsInput] = useState("");
    const [askInput, setAskInput] = useState("");
    const [hasQuestion, setHasQuestion] = useState(false);

    const clickToAns = async (questionId) =>{
        var data = {
            'studentId': userId, 
            "courseId": courseId, 
            "questionId": questionId,
            "answer": ansInput
        }

        await axios.patch('http://127.0.0.1:4000/api/questions', data, {'Content-Type': 'application/json'})
        .then(res=>console.log)
        .catch((error) => console.log);

        setAnsInput("");
        fetchResourceAfter();
    } 
    const clickToAsk = async() =>{
        var data = {
            'studentId': userId, 
            "courseId": courseId, 
            "question": askInput,
        }

        await axios.post('http://127.0.0.1:4000/api/questions', data, {'Content-Type': 'application/json'})
        .then(res=>console.log)
        .catch((error) => console.log);

        setAskInput("");
        fetchResourceAfter();
        var tmp_isOpen = [...isOpen, false];
        setisOpen(tmp_isOpen);
    } 
    const answerInput = (event) =>{
        // console.log(event.target.value);
        setAnsInput(event.target.value)
    }
    const questionInput = (event) =>{
        // console.log(event.target.value);
        setAskInput(event.target.value)
    }

    const fetchResource = async () => {
        const res = await axios.get(`http://127.0.0.1:4000/api/questions?courseId=${courseId}`)
        setOriginData(res.data.content);
        setHasQuestion(res.data.content.length > 0);
        var tmp_isOpen = []
        res.data.content.map((_, index)=>(
            tmp_isOpen.push(false)
        ))
        setisOpen(tmp_isOpen);
    }

    const fetchResourceAfter = async () => {
        const res = await axios.get(`http://127.0.0.1:4000/api/questions?courseId=${courseId}`)
        setOriginData(res.data.content);
        setHasQuestion(res.data.content.length > 0); 
    }

    const handleClick = (index) => {
        console.log("click");
        var tmp_isOpen = []
        isOpen.map((value, i)=>(
            i ===index ? tmp_isOpen.push(!value):tmp_isOpen.push(value)
        ))
        setisOpen(tmp_isOpen);
    };

    useEffect(() => { 
        fetchResource();
    },[]);
    
    return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        Course Reviews
        </ListSubheader>
    }
    className={classes.root}
    >
        {hasQuestion ?
        <>
            {originData.map((item, index)=>(
                <>
                <ListItem button onClick={()=>handleClick(index)}>
                    <ListItemIcon>
                        <ContactSupportIcon />
                    </ListItemIcon>
                    <ListItemText 
                    primary={item.QuCont}
                    secondary={`${item.StudId}—${(new Date(item.TimStp)).toDateString() }`}
                    />
                    {isOpen[index] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={isOpen[index]} timeout="auto" unmountOnExit>
                    {item.Answer.length > 0 ?
                    <>
                    {item.Answer.map((ans, index)=>(
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <QuestionAnswerIcon />
                                </ListItemIcon>
                                <ListItemText 
                                primary={ans.answer}
                                // secondary={`${user2}—2021.01.20`}
                                />
                            </ListItem>
                        </List>
                    ))
                    }
                    </>
                    :
                    <></>
                }
                <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    {isLogin ? 
                        <div>
                        <TextField
                        multiline
                        onChange={answerInput}
                        placeholder="My Answer"
                        variant="filled"
                        value={ansInput}
                        />
                        <Button onClick={()=>clickToAns(item._id)} >Answer</Button>
                        </div>
                    :
                    <div>Login to answer TODO: 超連結到login page 對其</div>
                    }
                    </ListItem>
                </List>
                </Collapse>
                </>
            ))}
        </>
            :
            <>No Questions</>
        }
        
        
        <ListItem button className={classes.nested}>
            <TextField
            multiline
            onChange={questionInput}
            placeholder="Question"
            variant="filled"
            value={askInput}
            />
            <Button onClick={clickToAsk} >Ask</Button>
        </ListItem>
    </List>
  );
}
