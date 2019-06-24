var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anything' });
});

const members = [
  {
    path: 'honey',
    name: 'Honey Shah',
    grade: 'College',
    school: 'Georgian College',
    gender: 'Girl',
    city: 'Barrie',
    hobbies: 'Painting',
    likes: 'shopping',
    dislikes: 'meat'
  },

  {
    path: 'chirayu',
    name: 'Chirayu Shah',
    grade: 'College',
    school: 'GLS College',
    gender: 'Boy',
    city: 'India',
    hobbies: 'Playing Cricket',
    likes: 'parties with friends',
    dislikes: 'talking with new people (not a people person)',
    relation: 'Brother'
  },

  {
    path: 'alpa',
    name: 'Alpa Shah',
    grade: 'studies completed',
    school: 'studies completed',
    gender: 'Girl',
    city: 'India',
    hobbies: 'Cooking new Food',
    likes: 'Cooking',
    dislikes: 'honey and chirayu fighting',
    relation: 'Mother'
  },

  {
    path: 'hitesh',
    name: 'Hitesh Shah',
    grade: 'studies completed',
    school: 'studies completed',
    gender: 'Boy',
    city: 'India',
    hobbies: 'watching cricket',
    likes: 'watching TV',
    dislikes: 'travelling',
    relation: 'Father'
  },

  {
    path: 'dhruv',
    name: 'Dhruv Shah',
    grade: '10th grade',
    school: 'Higher Secondary School',
    gender: 'Boy',
    city: 'India',
    hobbies: 'Playing with friends, playing cards',
    likes: 'watching movies',
    dislikes: 'watching news',
    relation: 'Cousin Brother'
  },

  {
    path: 'khushi',
    name: 'Khushi Shah',
    grade: '8th grade',
    school: 'Higher Secondary School',
    gender: 'Girl',
    city: 'India',
    hobbies: 'travelling different places',
    likes: 'shopping new clothes and movies',
    dislikes: 'watching serials',
    relation: 'Cousin Sister'
  },

  {
    path: 'pratham',
    name: 'Pratham Patel',
    grade: 'College',
    school: 'London College',
    gender: 'Boy',
    city: 'London',
    hobbies: 'Playing Rugby',
    likes: 'watching movies',
    dislikes: 'chocolates',
    relation: 'Friend'
  },

  {
    path: 'diya',
    name: 'Diya Patel',
    grade: 'College',
    school: 'London College',
    gender: 'Girl',
    city: 'London',
    hobbies: 'Drawing',
    likes: 'doing makeup',
    dislikes: 'studying',
    relation: 'Friend'
  }
];

router.get('/:name', (req, res, next) => {
  const name = req.params.name;

  const member = members.find(mem => mem.path === name);

  if (!member) {
    return next(new Error('Member does not exist Please enter valid member'));
  }

  res.render('member', member);
});

module.exports = router;
