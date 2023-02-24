const loadData = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.meals))
}

const displayData = (meals) => {
    const foodContainer = document.getElementById('favorite-food-container');
    foodContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal.idMeal)
        const mealDiv = document.createElement('div')
        mealDiv.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl rounded-lg">
            <figure><img src="${meal.strMealThumb}" alt="Movie"/></figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A magni odit quasi voluptate iusto voluptatibus voluptatum voluptates odio saepe quam reiciendis blanditiis nesciunt perferendis ullam delectus consequatur, dolorem quia explicabo.</p>
                <div class="card-actions justify-end">
                <label onclick="loadModalDetail(${meal.idMeal})" for="my-modal" class="btn rounded-lg">Details</label>
                </div>
            </div>
        </div>
        `
        foodContainer.appendChild(mealDiv)
    })
}

const searchMeal = () => {
    const searchField = document.getElementById('search-field').value
    loadData(searchField);
}

const loadModalDetail = detail => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detail}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayModalDetail(data.meals[0]))
}

const displayModalDetail = (meal) => {
    console.log(meal.strArea)
    const mealHeader = document.getElementById('meal-header')
    mealHeader.innerText = meal.strMeal
    document.getElementById('modal-image').src = meal.strMealThumb
    document.getElementById('modal-category').innerText = meal.strCategory
    document.getElementById('modal-area').innerText = meal.strArea
}

loadData('rice');