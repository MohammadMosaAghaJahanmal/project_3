
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