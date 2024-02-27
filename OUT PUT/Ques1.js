 
class Movie {

    constructor(title, studio, rating) {
    
    this.title = title;
    
    this.studio = studio;
    
    this.rating = rating;
    
    }
    getrating() {
        return "the rating is  " + this.rating;
      }
}
    
//-----------------------------------------------------------------------------------------------------------------------


class movie {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
}

//----------------------------------------------------------------------------------------------------------------------


      const moviesArray = [

        new Movie("Movie1", "Studio1", "PG"),
        
        new Movie("Movie2", "Studio2", "PG-13"),
        
        new Movie("Movie3", "Studio3", "R"),
        
        ];
        
        const pgMovies = Movie.getPG(moviesArray);
        
        console.log("PG Rated Movies:");
        
        pgMovies.forEach(movie => {
        
        console.log("Title:", movie.title, "| Studio:", movie.studio, "| Rating:", movie.rating);
        
        });
//------------------------------------------------------------------------------------------------------------------------       

    const casinoRoyale = new Movie ("Casino Royale", "Eon Productions", "PG13");

    console.log("Title:", casinoRoyale.title);

    console.log("Studio:", casinoRoyale.studio);

    console.log("Rating:", casinoRoyale.rating);
//-------------------------------------------------------------------------------------------------------------------------