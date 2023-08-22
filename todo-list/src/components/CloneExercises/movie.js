const movie = {
    
  name:"sholey",
  releasedDate:"1980",
  cast:[
      {actor:"amitabh"},
      {actor:"dharmender"},
      {actor:"sanjeev"},
      {actor:"hema"},
      {actor:"jaya"},
      ],
   cost: "1,00,000",
   earning:"2,00,00,000"
}

// const newMovie = { ...movie };
// newMovie.cast = newMovie.cast.map((castMember) => ({
//   ...castMember,
//   earner: '10k',
// }));
const NewMovie = {...movie}
NewMovie.cast = [...NewMovie.cast]



const updatedMovies = NewMovie.cast.map((index) => {
const castname =  {...NewMovie.cast[index],earn: "10k"}
NewMovie.cast[index]= castname;
return castname
});
console.log(updatedMovies)

// console.log (movie);
console.log (NewMovie);
