import axios from 'axios';

exports.getArticles = () => {
    axios
  .get('https://nc-news-bgp4.onrender.com/api/articles')
  .then((response) => {
    console.log(response);
  })
}

