document.getElementById('result').addEventListener('click',function (){
    const search =document.getElementById('search-Field');
    const searchText =search.value;
    search.value="";
    
    const url=`https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then (res=> res.json())
    .then (data => displayResultBook(data.docs));
    
})
document.getElementById('result').addEventListener('click',function (){
    const search =document.getElementById('search-Field');
    const searchText =search.value;
    search.value="";
    
    const url=`https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then (res=> res.json())
    .then (data => displayRes(data));
    
})


const displayRes = result =>{
    console.log(result.num_found);
    console.log(result.docs.length)
//     document.getElementById('resultNumber').innerText=`${result.numFound }
//     ${result.docs.length}`
}


 



const displayResultBook = books =>{
    const searchResult = document.getElementById('search-result');
    const error =document.getElementById('error')
    searchResult.textContent='';
    
    if(books.length === 0){
        error.innerText="No result found"
       
    }
    else{
        error.innerText="";
    }

    books.forEach(book => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div class="card mt-4">
            <img   src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-thumbnail" alt="...">
            <div class="card-body text-white bg-danger">
            <h2> Name title </h2>
              <h6 class="card-title text-center">${book.title}</h6>
              <p class="card-text"> <h4> Author name: </h4> 
              <ul>${book.author_name}</ul>
              </p>
              <p class="card-text"> <h4> Publisher name:</h4>
              <ul>${book.publisher}</ul>
              </p>
              <h4> First publish year: </h4>
              <h6>
              ${book.first_publish_year} </h6>
            </div>
          </div>
        `
        searchResult.appendChild(div);
    });
    
    
}