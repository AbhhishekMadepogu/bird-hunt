import Matter from "matter-js";
const Physics = (entities,{touches,time,dispatch}) =>{
    let engine=entities.physics.engine
    touches.filter(t=>t.type === 'press')
    .forEach(t=>{
        Matter.Body.setVelocity(entities.Bird.body,{x:0,y:-6})
    })
    Matter.Engine.update(engine,time.delta)
    Matter.Body.translate(entities[`ObstacleTop1`].body,{x:-3,y:0})
    Matter.Body.translate(entities[`ObstacleBottom1`].body,{x:-3,y:0})

    return entities;
}
export default Physics;