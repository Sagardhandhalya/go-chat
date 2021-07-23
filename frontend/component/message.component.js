class MessageComponent extends HTMLElement{

    get align(){
        return this.getAttribute("align");
    }

    get text(){
        return this.getAttribute("text");
    }

    get owner(){
        return this.getAttribute("owner");
    }

    get bgColor(){
        return this.getAttribute("bg-color");
    }

    connectedCallback() {
        this.render(); 
      }
    
      render() {
        let {text,bgColor,owner} = this;
        this.innerHTML = `
        <div class="msg" style="background-color:${bgColor}">
        <p class="msg_user">${owner}</p> 
        <p class="msg_text">${text}</p>
        </div>
        `
      }
      
      constructor() {
        super();
      }
}

window.customElements.define("chat-msg",MessageComponent);
