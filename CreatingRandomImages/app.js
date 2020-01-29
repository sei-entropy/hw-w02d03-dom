
  
    const randomButton = document.querySelector('#randomize');
const randomImage = function() {

    /*
    //After 7 hours I realised it was not supposed to be this way ... but I'm keeping it tho .
    const Images = [
        {
       src: "https://images.unsplash.com/photo-1580184481690-5546bb513ae7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
       width: '50%',
       height: '50%'
       },
       {
       src: "https://images.unsplash.com/photo-1580122468928-0e9940385cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
       width: '50%',
       height: '50%'
       },
       {
       src: "https://images.unsplash.com/photo-1579911092298-d0531f7bf71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
       width: '50%',
       height: '50%'
       },
       {
       src: "https://images.unsplash.com/photo-1579452258482-79cb2c698c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
       width: '50%',
       height: '50%'
       },
       {
       src: "https://images.unsplash.com/flagged/photo-1575556809963-3d9e5730eda0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
       width: '50%',
       height: '50%'
               }

   ];
  
    let i = Math.floor(Math.random() * (Images.length - 2 + 1)) + 1;
    */
   const newImage = document.createElement('img');
   newImage.setAttribute('src','https://source.unsplash.com/random');
   
   
   //newImage.setAttribute('src',Images[i].src);


    const targetI = document.querySelector('.image');
    targetI.appendChild(newImage);
    
}
randomButton.addEventListener('click', randomImage);