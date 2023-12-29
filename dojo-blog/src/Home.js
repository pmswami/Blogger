const Home = () => {

    const handleClick = (event)=>{
        console.log("Hello Ninjas", event)
    }

    const handleClickAgain = (name, event)=>{
        console.log(`Hello ${name}`)
        console.log(event)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={(event) => {handleClickAgain("Yoshi", event)}}>Click Me!</button>
        </div>
    );
}
 
export default Home;