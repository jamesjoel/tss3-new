import Box1 from "../shared/Box1";
import Box2 from "../shared/Box2";

let Home = ()=>{
    
    let a = false;

    let city = ["indore", "mumbai", "pune", "bhopal", "ujjain", "delhi", "abc", "pqr", "xyz"];

    return(
        <>
            { a == true ? <Box1 /> : <Box2 /> }
            <h1>Home Page</h1>
            {
                city.map((value, index)=>{
                    return(
                        <h3>{ value }</h3>
                    )
                })
            }
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nihil similique deserunt, deleniti ducimus reiciendis voluptatum pariatur inventore hic, quae ut. Ipsa ullam voluptas quas corporis incidunt at ducimus voluptatibus?</p>
        </>
    )
}

export default Home;
/*
    All Loops in JavaScript (ES-6)

    1. for
    2. while
    3. do...while

    4.  .forEach()
    5.  .map()
    6.  .filter()
    7.  .reduce()

    8. for....of
    9. for....in

*/