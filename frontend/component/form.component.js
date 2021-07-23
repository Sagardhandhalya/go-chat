import Services from './../script.js'
class FormComponent extends HTMLElement{

    get type(){
        return this.getAttribute("type");
    }

    get lable(){
        return this.getAttribute("label");
    }

    get buttonText(){
        return this.getAttribute("button-text");
    }

    connectedCallback() {
        console.log("sdfbdsfbj");
        this.render(); 
        document.getElementById(`${this.type}_form`).addEventListener("submit",e=>{
            e.preventDefault()
            if(this.lable === "username"){
                Services.setUsername(document.getElementById(this.lable).value)
                Services.makeConnection()
            }
            else{
                Services.setMsg(document.getElementById(this.lable).value)
                Services.sendMessage()
                document.getElementById(this.lable).value = ""
            }
        })
      }
    
      render() {
        let {type,lable,buttonText} = this;
        this.innerHTML = `
        <form id="${type}_form">
            <input type="text" id=${lable} required placeholder="${lable}">
            <button type="submit">${buttonText}</button>
        </form>
        `
      }
      
      constructor() {
          console.log('hi..');
        super();
      }
}

window.customElements.define("chat-form",FormComponent);
