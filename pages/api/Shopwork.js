import ArtDB from './Database/ArtDB';
import Art from './Database/Art';

export default async (req, res) => {

  await ArtDB();

  Art.find({sold: false}, (err, foundItems)=> {
      if (err) {
        console.log(err);
      } else {
        res.json(foundItems);
      }
    });
};
