/*
function Hello(){
    return <h1>diga tu</h1>
}
*/

const name = "cadu"; // pode ser colocado na Const Hello em vez do displayName()

const displayName = () =>{
    return "I need help";
}

const Hello = ()=> <h1>This Message is: {displayName()}</h1>

export default Hello;