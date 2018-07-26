import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom"
import madLibsPic from "../images/mad-libs.png"
import pigLatinPic from "../images/pig-latin.png"
import ticTacPic from "../images/tic-tac-toe.png"

class Home extends Component {

    listOfGames = [
        {
            title: "Mad Libs",
            description: "Fill in the blanks to create a story that make no sense",
            image: madLibsPic,
            route: "/mad-libs"

        },
        {
            title: "Tic-Tac-Toe",
            description: "Play against a friend...or yourself if you have no friends.",
            image: ticTacPic,
            route: "/tic-tac-toe"
        },
        {
            title: "Pig Latin",
            description: "A simple pig latin translator so that friends and authority figures can no longer gossip about you while you're still in the room.",
            image: pigLatinPic,
            route: "/pig-latin"
        },
    ]

    renderTiles = () => {
        return this.listOfGames.map((game) => {
            return (
                <Card className="clubBenefits" key={game.title}>
                    <CardMedia
                    style={{height: 200}}
                    image={game.image}/>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {game.title}
                        </Typography>
                        <hr/>
                        <Typography gutterBottom component="p">
                            {game.description}
                        </Typography>
                        <Link to={game.route}>
                            <Button size="small" color="primary">
                                Play
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
                
            )
        })
    }

    render() {
        return (
        <div className = 'Home'>
            <h1>Kill some time...</h1>
            <div className="tileContainer">
                {this.renderTiles()}
            </div>
        </div>
        );
    }
}

export default Home;