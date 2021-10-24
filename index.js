class Book {
    constructor(name, author, genre, star) {
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.star = star;
    }
}
showBooks = function()
{
    
    let lName = localStorage.getItem("lName")
    let lAuthor = localStorage.getItem("lAuthor")
    let lGenre = localStorage.getItem("lGenre")
    let lStar = localStorage.getItem("lStar")
    
    if (lName == null || lAuthor == null ) 
    {
        lNameObj = [];
        lAuthorObj = [];
        lGenreObj = [];
        lStarObj = [];
    }
    else 
    {
        lNameObj = JSON.parse(lName);
        lAuthorObj = JSON.parse(lAuthor);
        lGenreObj = JSON.parse(lGenre);
        lStarObj = JSON.parse(lStar);
    }
    
    console.log(lNameObj)
    let uiString = "";
    Array.from(lNameObj).forEach(function(element, index) 
    {
        if(lStarObj[index])  
        {
            uiString += `<tr class="my-1 Row">
                                <td class="name">${element}</td>
                                <td class="author">${lAuthorObj[index]}</td>
                                <td class="genre">${lGenreObj[index]}</td>
                            <td class="star">
                                <button type="button" onclick="starred(${index})" id="starred" class="btn btn-outline-warning btn-sm mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                </button>
                            </td>
                            <td class="delete">
                                <button type="button" onclick="del(${index})" id="del" class="btn btn-outline-danger btn-sm mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr><br>`;
        }  
        else
        {
            uiString += `<tr class="my-1 Row">
                                <td class="name">${element}</td>
                                <td class="author">${lAuthorObj[index]}</td>
                                <td class="genre">${lGenreObj[index]}</td>
                            <td class="star">
                                <button type="button" onclick="starred(${index})" id="starred" class="btn btn-outline-warning btn-sm mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                    </svg>
                                </button>
                            </td>
                            <td class="delete">
                                <button type="button" onclick="del(${index})" id="del" class="btn btn-outline-danger btn-sm mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr><br>`;
        }
    });
    localStorage.setItem("lName", JSON.stringify(lNameObj));
    localStorage.setItem("lAuthor", JSON.stringify(lAuthorObj));
    localStorage.setItem("lGenre", JSON.stringify(lGenreObj));
    localStorage.setItem("lStar", JSON.stringify(lStarObj));

    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = uiString;
}
showBooks();

// function to delete book
function del(index)
{   
    let lName = localStorage.getItem("lName")
    let lAuthor = localStorage.getItem("lAuthor")
    let lGenre = localStorage.getItem("lGenre")
    let lStar = localStorage.getItem("lStar")
    console.log(index);
    if (lName == null || lAuthor == null) 
    {
        lNameObj = [];
        lAuthorObj = [];
        lGenreObj = [];
        lStarObj = [];
    }
    else 
    {
        lNameObj = JSON.parse(lName);
        lAuthorObj = JSON.parse(lAuthor);
        lGenreObj = JSON.parse(lGenre);
        lStarObj = JSON.parse(lStar);
    }
    lNameObj.splice(index,1);
    lAuthorObj.splice(index,1);
    lGenreObj.splice(index,1);
    lStarObj.splice(index,1);

    localStorage.setItem("lName", JSON.stringify(lNameObj));
    localStorage.setItem("lAuthor", JSON.stringify(lAuthorObj));
    localStorage.setItem("lGenre", JSON.stringify(lGenreObj));
    localStorage.setItem("lStar", JSON.stringify(lStarObj));
    showBooks();
}



function add(book)
{
    let lName = localStorage.getItem("lName")
    let lAuthor = localStorage.getItem("lAuthor")
    let lGenre = localStorage.getItem("lGenre")
    let lStar = localStorage.getItem("lGenre")

    if (lName == null || lAuthor == null) 
    {
        lNameObj = [];
        lAuthorObj = [];
        lGenreObj = [];
        lStarObj = [];
    }
    else 
    {
        lNameObj = JSON.parse(lName);
        lAuthorObj = JSON.parse(lAuthor);
        lGenreObj = JSON.parse(lGenre);
        lStarObj = JSON.parse(lStar);
    }
    lNameObj.push(book.name);
    lAuthorObj.push(book.author);
    lGenreObj.push(book.genre);
    lStarObj.push(book.star);
    // console.log(lNameObj);

    localStorage.setItem("lName", JSON.stringify(lNameObj));
    localStorage.setItem("lAuthor", JSON.stringify(lAuthorObj));
    localStorage.setItem("lGenre", JSON.stringify(lGenreObj));
    localStorage.setItem("lStar", JSON.stringify(lStarObj));
    showBooks();
}

clear = function () 
{
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

validate = function (book)
{
    if (book.name.length < 2 || book.author.length < 2) { return false; }
    else { return true; }
}

shine = function (str, type) 
{
    let avlbl = document.getElementById('avlbl');
    avlbl.classList.add(`anim-${type}`);
    let msg = document.getElementById('msg');
    msg.innerHTML += `<h6 class="anim-txt" style="height:16px">${str}</h6>`;
    setTimeout(function () { avlbl.classList.remove(`anim-${type}`); }, 1800);
    setTimeout(function () { msg.innerHTML = '' }, 1800);
    if(type=='failure')
    {
        setTimeout(function () { msg.innerHTML += `<h6 class="attntn" style="height:16px">Book name and Author name must contain atleast 3 characters</h6>`}, 2000);
        setTimeout(function () { msg.innerHTML = '' }, 7000);
    }

}
// Add clear button to clear library Form
let clrBtn = document.getElementById('clr');
clrBtn.addEventListener('click', clear());

// Add submit event listener to libraryform
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    let name = document.getElementById('bookName');
    let author = document.getElementById('bookAuthor');
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let others = document.getElementById('others');
    let star = false;
    let genre;

    if (fiction.checked) { genre = fiction.value; }
    else if (programming.checked) { genre = programming.value; }
    else if (cooking.checked) { genre = cooking.value; }
    else { genre = others.value; }
    let book = new Book(name.value, author.value, genre, star);

    if (validate(book)) 
    {
        add(book);
        clear();
        shine("Book Successfully added to Library", "success");
    }
    else 
    {
        shine("Error! please enter valid credentials", "failure");
    }
    e.preventDefault();
}

function starred(index)
{
    let lStar = localStorage.getItem("lStar")

    lStarObj = JSON.parse(lStar);

    if(lStarObj[index])
    {
        lStarObj[index]=false;
        console.log(index);
        console.log(lStarObj[index]);
        
    }
    else
    {
        lStarObj[index]=true;
        console.log(index);
        console.log(lStarObj[index]);
    }

    localStorage.setItem("lStar", JSON.stringify(lStarObj));
    showBooks();
}

function showStarredBooks()
{
    let lName = localStorage.getItem("lName")
    let lAuthor = localStorage.getItem("lAuthor")
    let lGenre = localStorage.getItem("lGenre")
    let lStar = localStorage.getItem("lStar")
    
    if (lName == null || lAuthor == null ) 
    {
        lNameObj = [];
        lAuthorObj = [];
        lGenreObj = [];
        lStarObj = [];
    }
    else 
    {
        lNameObj = JSON.parse(lName);
        lAuthorObj = JSON.parse(lAuthor);
        lGenreObj = JSON.parse(lGenre);
        lStarObj = JSON.parse(lStar);
    }
    console.log(lNameObj)
    let uiString = "";
    Array.from(lNameObj).forEach(function(element, index) 
    {
        if(lStarObj[index])  
        {
            uiString += `<tr class="my-1 Row">
                                <td class="name">${element}</td>
                                <td class="author">${lAuthorObj[index]}</td>
                                <td class="genre">${lGenreObj[index]}</td>
                            <td class="star">
                                <button type="button" onclick="starred(${index})" id="starred" class="btn btn-outline-warning btn-sm mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                </button>
                            </td>
                            <td class="delete">
                                <button type="button" onclick="del(${index})" id="del" class="btn btn-outline-danger btn-sm mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr><br>`;
        }  
    });
    localStorage.setItem("lName", JSON.stringify(lNameObj));
    localStorage.setItem("lAuthor", JSON.stringify(lAuthorObj));
    localStorage.setItem("lGenre", JSON.stringify(lGenreObj));
    localStorage.setItem("lStar", JSON.stringify(lStarObj));
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = uiString;
}