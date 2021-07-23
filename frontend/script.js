const Services =( () => {
    var data = {
        username: "",
        message: ""
    }
    var ws
    return {

        getData: () => {
            return data
        },
        setUsername: (user) => {
            data.username = user
            document.getElementById('form_container').innerHTML = `
        <chat-form type="message" button-text="Send Message" label="message"></chat-form> `
        },
        setMsg: (msg) => {
            console.log(msg);
            data.message = msg
        },
        makeConnection: () => {
            ws = new WebSocket('ws://localhost:8000/ws')
            document.getElementById('message_container').style.display=""
            ws.addEventListener("message", function(e){
                var msg = JSON.parse(e.data);
                console.log(msg);
                let msgs = document.getElementById('message_container').innerHTML 
                document.getElementById("message_container").innerHTML = msgs +`
                <div><chat-msg owner="${msg.username}" bg-color="${msg.username == data.username ? "#DCF8C6":"#c6d2f8"}" text="${msg.message}"></chat-msg></div>
                ` 
            })
        },
        sendMessage: () => {
            if(ws.OPEN){
                console.log(data);
                ws.send(JSON.stringify(data))
            }
        }
    }
})()

export default Services