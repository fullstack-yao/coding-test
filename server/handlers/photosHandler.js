import photos from '../data.js';
import shuffleArray from '../helpers/shuffleArray.js';

const { catsList, sharksList } = photos;

const getPhotos = (req, res) => {
    const { category } = req.query;
    let returnList = [];
    switch(category) {
        case 'cat':
            returnList = catsList;
            break;
        case 'shark':
            returnList = sharksList;
            break;
        default:
            returnList = shuffleArray([...catsList, ...sharksList]);
    }
    res.json(returnList);
};

export default { getPhotos };
