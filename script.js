
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

const adsMenu = document.querySelectorAll(".first-main-ad label");


if(adsMenu.length > 0)
{
    const allTitles = document.querySelectorAll(".new-ad-top-title");
    
    const reset = document.querySelector(".first-ad-group .new-ad-top-title");
    const showMenu = document.querySelectorAll(".new-ad-post > input")
    const firsInputs = document.querySelectorAll(".f-inputs")
    const allSecondPart = document.querySelectorAll(".s-inputs")
    const secondAdsMenu = document.querySelectorAll(".second-ad-group label")
    const thirdAdsMenu = document.querySelectorAll(".third-ad-group label")
    const fourthAdsMenu = document.querySelectorAll(".fourth-ad-group label")
    const nexButton = document.querySelector(".next-btn")

    nexButton.addEventListener("click", (e) =>
    {
        let checkedInputs = document.querySelectorAll(".jobs-inputs > input:checked + label");
        const TextMerger = document.querySelector(".all-names");
        let arr = [];
        for (const perChecked of checkedInputs) {
            arr.push(perChecked.innerText)
        }

        TextMerger.innerHTML = arr.join(", ");

    })
    
    for (const perMenu of adsMenu) {
        perMenu.onclick = (e) =>
        {
            for (const menu of adsMenu) {
                menu.style.display = "none";
            }
            perMenu.style.display = "block";
        }
    }

    for (const perMenu of secondAdsMenu) {
        perMenu.onclick = (e) =>
        {
            for (const menu of secondAdsMenu) {
                menu.style.display = "none";
            }
            perMenu.style.display = "block";
        }
    }

    for (const perMenu of thirdAdsMenu) {
        perMenu.onclick = (e) =>
        {
            for (const menu of thirdAdsMenu) {
                menu.style.display = "none";
            }
            perMenu.style.display = "block";
        }
    }

    for (const perMenu of fourthAdsMenu) {
        perMenu.onclick = (e) =>
        {
            for (const menu of fourthAdsMenu) {
                menu.style.display = "none";
            }
            perMenu.style.display = "block";
        }
    }


    for (const perMenu of showMenu) {
        perMenu.onchange = (e) =>
        {
            if (perMenu.checked) {
                document.querySelector("."+perMenu.dataset.class).style.display = "grid"
            }
            if (!perMenu.checked) {
                document.querySelector("."+perMenu.dataset.class).style.display = "none"
                for (const menu of firsInputs) {
                    menu.removeAttribute("style")
                }
            }
        }
    }

    for (const perMenu of adsMenu) {
        perMenu.onclick = (e) =>
        {
            for (const menu of adsMenu) {
                menu.style.display = "none";
            }
            perMenu.style.display = "block";
        }
    }


    
    for (const perTitle of allTitles) {
        
        perTitle.onclick = (e) =>
        {
            let allLables = perTitle.parentElement.querySelectorAll("label")
            for (const menu of allLables) {
                menu.removeAttribute("style")
                window.scrollTo({top: 0})
            }
            sendStateTo(perTitle, perTitle.dataset.id)
        }
    }
    
}

function sendStateTo(perTitle, id) {
    const allInputs = document.querySelectorAll(".new-ad-post > input");
    const secondLabels = document.querySelectorAll(".new-ad-post label")
    const thirdLabels = document.querySelectorAll(".third-ad-group label, .fourth-ad-group label, .fifth-ad-group label")
    const fourthLabels = document.querySelectorAll(".fourth-ad-group label, .fifth-ad-group label")
    const fifthLabels = document.querySelectorAll(".fifth-ad-group label")
    const second = document.querySelectorAll(".part-wrapper ~ input")
    const third = document.querySelectorAll(".part-wrapper-two ~ input")
    const fourth = document.querySelectorAll(".part-wrapper-fourth ~ input")
    const _allInputs = document.querySelectorAll(".jobs-inputs > input");
    console.log(id)
    if (id == "1") {
        for (const per of allInputs) {
            if(per.checked)
            {
                per.click();
            }
        }
        for (const perLabel of secondLabels) {
            perLabel.removeAttribute("style")
        }
        for (const perInput of _allInputs) {
            if(perInput.checked)
            {
                perInput.click()
            }
        }
    }
    if (id == "2") {
        for (const per of second) {
            if(per.checked)
            {
                per.click();
            }
        }
        for (const perLabel of thirdLabels) {
            perLabel.removeAttribute("style")
        }
        for (const perInput of _allInputs) {
            if(perInput.checked)
            {
                perInput.click()
            }
        }
    }
    if (id == "3") {
        for (const per of third) {
            if(per.checked)
            {
                per.click();
            }
        }
        for (const perLabel of thirdLabels) {
            perLabel.removeAttribute("style")
        }
        for (const perInput of _allInputs) {
            if(perInput.checked)
            {
                perInput.click()
            }
        }
    }
    if (id == "4") {

        const message = document.querySelector("#_message");

        if (message.checked) {
            message.click();
        }
    }
}


