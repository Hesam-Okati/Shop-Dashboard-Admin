async function useMassager( type , msg , date ) {

    const Body = {
        type,
        msg,
        date
    }

    await fetch("http://localhost:3001/api/msg/add" , {method : "POST" , body: JSON.stringify(Body)})

    .then(res => res.text())
    .then(data => console.log(data))

}

export default useMassager