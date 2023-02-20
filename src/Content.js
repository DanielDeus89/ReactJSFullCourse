const Content = () =>{
    const handleName = () =>{
        const names = ['Daniel','Milene','Heitor'];
        const int = Math.floor(Math.random()*3);
        return names[int];

    }
    return(
        <main>
            Hello World {handleName()}!
        </main>
    )
}

export default Content