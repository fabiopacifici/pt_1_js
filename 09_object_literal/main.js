const ball = {
  type: 'golf',
  colors: ['white', 'red'],
  weight: 100,

}

console.log(ball);


/* Read object values 

- dot notatioj
- square brakets notation
*/
console.log(ball.colors) // ['white', 'red']
console.log(ball['type']);


let colorsList = 'colors'
// not working
ball.colorsList


console.log(ball[colorsList]);


// Add elements to an object literal

ball.material = 'plastic';

ball['hardness'] = 'hard';

console.log(ball);

ball['hardness'] = 'soft';

console.log(ball);



// Live array of objects

/* 
post:
- title
- content
- image
*/

const posts = [
  {
    title: 'Learn HTML',
    content: 'lorem ipusm dolopr',
    image: 'https://picsum.photos/400/200'
  },
  {
    title: 'Learn CSS',
    content: 'lorem ipusm dolopr',
    image: 'https://picsum.photos/400/200'
  },
  {
    title: 'Learn JS',
    content: 'lorem ipusm dolopr',
    image: 'https://picsum.photos/400/200'
  },
  {
    title: 'Learn VUE',
    content: 'lorem ipusm dolopr',
    image: 'https://picsum.photos/400/200'
  },
  {
    title: 'Learn PHP',
    content: 'lorem ipusm dolopr',
    image: 'https://picsum.photos/400/200'
  }
]

console.log(posts);



// setup
const postsRowEl = document.querySelector('.posts .row')


for (let i = 0; i < posts.length; i++) {
  const post = posts[i];



  const postMarkup = `
    <div class="col">
      <div class="card">
        <img class="card-img-top" src='${post.image}' alt='' />
        <div class="card-body">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        </div>
      </div>
    </div>
    `


  postsRowEl.insertAdjacentHTML('beforeend', postMarkup);

  //postsRowEl.innerHTML +=` postMarkup`

}


