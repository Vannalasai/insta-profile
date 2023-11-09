
let random = Math.floor(Math.random() * 30 + 1);

document.querySelector('.postNum').innerHTML = random


document.querySelector('.followerNum').innerHTML = Math.floor(Math.random() * 10000 + 1);

document.querySelector('.followingNum').innerHTML = Math.floor(Math.random() * 10000 + 1);

fetch("https://randomuser.me/api/").then(response=>{
    response.json().then(data=>{
        let user = data.results[0];
        console.log(user);
        document.querySelector('.firstName').innerHTML = user.name.first;
        document.querySelector('.fullName').innerHTML = user.name.first + ' ' + user.name.last;
        document.querySelector('.profilePicture').src = user.picture.medium;

        for(i=0; i<random; i++){
            let img = document.createElement('img');
            img.src = 'https://picsum.photos/9' + i;

            document.querySelector('.posts').append(img);
        }
        
    })
})