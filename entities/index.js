import Matter from "matter-js"
import Bird from "../components/Bird";
import Floor from "../components/Floor";
import { Dimensions } from "react-native";
import Obstacle from "../components/Obstacle";
import { getPipeSizePosPair } from "../utils.js/random";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world

    world.gravity.y = 0.4;
    const pipeSizePosA = getPipeSizePosPair()
    const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9)


    return {
        physics: { engine, world },
         
         Bird: Bird(world, 'green', { x: 50, y: 300 }, { height: 40, width: 40 }),
         ObstacleTop1: Obstacle(world,'red', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size,'ObstacleTop1'),
         ObstacleBottom1: Obstacle(world,'blue', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size, 'ObstacleBottom1'),

        ObstacleTop2: Obstacle(world,  'red', pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size,'ObstacleTop2'),
        ObstacleBottom2: Obstacle(world, 'blue', pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size,'ObstacleTop2'),
         Floor: Floor(world, 'green', { x: windowWidth/2, y: windowHeight }, { height: 40, width: windowWidth }),

    }
}