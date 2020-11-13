
const btns = `
    
    <div class="toggle-btn">
        Dark 
        <input type="checkbox"  id="toggle" onchange='changed(this)'>
        <label for="toggle"></label> 
        Light
    </div>
`;

document.body.insertAdjacentHTML('beforeend', btns);


let i = false;
function changed(e)
{
    let link = document.head.querySelector("link");
    if(i)
    {
        
        link.href = "dark.css"
        i = !i;
        return
    }
    link.href = "light.css"
    i = !i;
}


window.onresize = (e) =>
{
    if(window.innerWidth <= 845)
    {
        const boxes = document.querySelectorAll("input[type=checkbox]");
        for (const box of boxes) {
            box.checked = false
        }
    }

}

const edit_btns = document.querySelectorAll(".edit_btn");

if(edit_btns.length >= 1)
{

    const form = document.querySelector('form');

    form.onclick = (e) =>
    {
        e.target.classList.forEach((value) =>
        {
            if(value == "cancel")
            {
                clearArea(e.target.parentElement.parentElement.parentElement.querySelector(".d-none"))
            }
        })
    }
    
    for (const btn of edit_btns) {
        btn.onclick = function(e)
        {
            e.preventDefault();
            for (const editbt of edit_btns) {
                
                clearArea(editbt)
            }
            const parent = btn.parentElement.parentElement;
            const input = parent.querySelector(".to-top");
            const title = parent.querySelector(".titles");
            let bool = true;
            parent.classList.forEach((value) =>
            {
                if(value ==  "alert")
                {
                    this.setAttribute('class', 'd-none')
                    parent.style.height = "200px"
                    bool = false;
                    return
                }
            })
            if (bool) {   
                this.setAttribute('class', 'd-none')
                title.setAttribute("style", 'display: none')
                parent.style.height = "110px";
                input.setAttribute("class", 'to-top account-input-controllers')
            }
        }
    }
}

function clearArea(editbt) {
    if(editbt.getAttributeNode("class").value == "d-none")
    {
        const parent = editbt.parentElement.parentElement;
        const input = parent.querySelector(".to-top");
        const title = parent.querySelector(".titles");
            editbt.setAttribute('class', 'd-block')
            parent.style.height = "30px";
            let bool = true;
            parent.classList.forEach((value) =>
            {
                if(value ==  "alert")
                {
                    bool = false;
                }
            })
            if(bool)
            {
                input.setAttribute("class", 'to-top')
                title.setAttribute("style", 'display: block');
            }
    }
    
}