const Library = function (name, creator, playlist=[]) {
  this.name = name;
  this.creator = creator;
  this.playlist = playlist;
}
// console.log(Library);


const lib = new Library("Music", "Konstantin")
// console.log(lib);

const PlaylistOne = function (name, tracks=[]) {
  this.name = name;
  this.tracks = tracks;
}

const playList1 = new PlaylistOne("Rock")
// console.log(playList1);


const Track = function (name, rating, length ) {
  this.name = name;
  this.rating = rating;
  this.length = length;
}
const track1 = new Track("Chains", 2, 80)
// console.log(track1);

const track2 = new Track("Rope", 4, 50)
// console.log(track2);

const track3 = new Track("Window", 5, 30)
// console.log(track3);



PlaylistOne.prototype.addTrackToPLaylist = function(track) {
  this.tracks.push(track)
}
playList1.addTrackToPLaylist(track1)
playList1.addTrackToPLaylist(track2)
playList1.addTrackToPLaylist(track3)
 console.log(playList1);

PlaylistOne.prototype.overallRating = function() {
  // return this.tracks.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr.rating))
  return this.tracks.reduce((accumulator, curr) => (accumulator + curr.rating/this.tracks.length),0).toFixed(2)
  }


console.log(playList1.overallRating());




Library.prototype.addPlayListToLibrary = function(playlist) {
  this.playlist.push(playlist)
}
lib.addPlayListToLibrary(playList1)
// console.log(lib);
