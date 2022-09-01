import Matter from "matter-js"
import Bird from "../components/Bird";
import Floor from "../components/Floor";
import { Dimensions } from "react-native";
import Obstacle from "../components/Obstacle";
const windowHeight = Dimensions.get('window').height;
const WindowWidth = Dimensions.get('window').width;


export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world

    world.gravity.y = 0.4;


    return {
        physics: { engine, world },
         
         Bird: Bird(world, 'green', { x: 50, y: 300 }, { height: 40, width: 40 }),
         ObstacleTop1: Obstacle(world, 'red', { x: 50, y: 300 }, { height: 40, width: 40 },'Obstacle1'),
         Floor: Floor(world, 'green', { x: WindowWidth/2, y: windowHeight }, { height: 40, width: WindowWidth }),

    }
}