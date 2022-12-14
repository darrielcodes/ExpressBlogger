var express = require('express');
var router = express.Router();

// VALIDATION IMPORT
var { validateBlogData } = require('../validation/blogs');

const sampleBlogs = [
    {
          title: "dicta",
      text: "Iusto et in et. Nulla accusantium fugit. Et qui dolorem inventore soluta et veritatis. Aut ut aut non laudantium eveniet suscipit odit. Sapiente sint nihil nihil sit et molestias. In nisi omnis quas et sed aut minus aperiam ea.\n \rLaudantium quo quisquam quae. Et et quas officia perspiciatis iusto sunt sunt eaque. Quidem sit voluptas deserunt sequi magni.\n \rEst est facere cumque ipsam omnis animi. Voluptatem magnam officiis architecto possimus. Quia similique aut eos qui. Quasi quae sed aliquam.",
      author: "Darren Abbott",
      category: ["Lorem", "sit", "amet"],
      createdAt: "2022-03-22T10:36:37.176Z",
      lastModified: "2022-03-22T10:36:37.176Z",
    },
    {
          title: "ducimus",
      text: "Placeat ea et fuga. Qui itaque quibusdam nam. Maxime nobis quam. Et laudantium sunt incidunt reiciendis.\n \rEarum aut sed omnis autem aliquam architecto corporis sint. Nostrum cumque voluptatem aperiam alias similique. Tenetur et esse omnis praesentium ipsum alias. Impedit rerum qui quia quaerat architecto mollitia est autem. Qui blanditiis earum et qui dolorum reprehenderit. Debitis est temporibus.\n \rEt nam sed. Corporis ut rerum. Ut qui dolore est dolorem ex.",
      author: "Luke Rogahn PhD",
      category: ["Lorem", "ipsum"],
      createdAt: "2022-03-22T15:16:56.285Z",
      lastModified: "2022-03-22T15:16:56.285Z",
    },
    {
          title: "quod",
      text: "Accusamus nisi eos. Tenetur earum tenetur nemo. Qui voluptas temporibus repellendus maxime. Ipsum optio voluptate enim nihil. Ea et dolorem. Omnis unde perspiciatis.\n \rUt odio eaque. Harum non placeat. Eveniet molestiae in cupiditate dolor doloremque rerum eligendi aut ab.\n \rMolestias eligendi et. Nemo velit natus autem numquam atque provident et nulla. In et dolores ad nihil. Delectus quis doloremque asperiores similique. Asperiores id nam vitae nobis labore autem. Dolor aperiam provident quia consectetur aut ut.",
      author: "Maryann Schneider",
      category: ["Lorem", "ipsum", "dolor", "sit", "amet"],
      createdAt: "2022-03-21T20:09:32.298Z",
      lastModified: "2022-03-21T20:09:32.298Z",
    },
    {
          title: "ut",
      text: "Itaque necessitatibus repudiandae. Porro suscipit exercitationem qui atque. Perferendis suscipit debitis sint aut dignissimos nobis ut. Modi ea nihil est vel consequuntur voluptatem. In magnam delectus in eos reiciendis sit est enim eligendi. Sint dicta at.\n \rConsectetur aspernatur alias sed non explicabo blanditiis laborum fugit voluptate. Reiciendis iste aut sit natus qui et in ratione. Placeat qui in voluptatum autem nulla ratione. Commodi sit alias sint sapiente rem. Quia sapiente minus deleniti vitae.\n \rExercitationem numquam omnis maxime dolorum sed deserunt suscipit laudantium. Ad et autem voluptatem esse laudantium et. Id fuga accusamus est sapiente dicta.",
      author: "Dr. Lorenzo Anderson",
      category: ["ipsum", "dolor", "sit", "amet"],
      createdAt: "2022-03-21T23:07:53.447Z",
      lastModified: "2022-03-21T23:07:53.447Z",
    },
    {
          title: "id",
      text: "Porro officia aliquid fugiat sed reprehenderit illo amet doloribus sed. Molestiae vero et. Quae voluptates dolores. Voluptatem facere fuga. Veniam perferendis illo ut sunt earum deleniti.\n \rIusto neque dolorem esse error. Saepe et quia ut corrupti. Autem repellendus similique dolorem sunt in ipsa perferendis. Et excepturi ut voluptatem deserunt accusantium dolores aperiam cum ut.\n \rDoloremque expedita sit et voluptatem unde libero. Numquam beatae sed repellat iusto doloribus fugit tenetur. Possimus et ut adipisci harum voluptatem provident consequatur. Corporis quo aut vel itaque blanditiis illum.",
      author: "Bobbie Dach",
      category: ["amet"],
      createdAt: "2022-03-22T15:14:39.819Z",
      lastModified: "2022-03-22T15:14:39.819Z",
    },
  ];
/* GET blogs default */
router.get('/', function(req, res, next) {
  try {
    res.json({
		success: true,
		route: "blogs",
		message: "hello from the blogs default route"
    });
} catch (e) {
    // in catch block, always console.log the error and respond with an error object
    console.log(e);
    res.json({
        success: false,
        error: String(e)
    })
}
});

// GET ALL BLOGS
router.get("/all", (req, res) => {
    try{
    const fields = req.query.fields
    const fieldsArray = fields.split(",")
    
    // .map() - loops thru array and modifies each entry then returns modiefied entry into new array
    const mappedBlogs = sampleBlogs.map((blog) => {
        const blogWithFields = {};

        //loop thru fieldsArray and assign that field from blog to blogwithFields
        //ex; first field = title ---> blogswithFields["title"] = blog["title"]
        fieldsArray.forEach((field) => {
            blogWithFields[field] = blog[field]
        });
        
        return blogWithFields
    })
    res.json({
        success: true,
        blogs: mappedBlogs
    });
} catch (e) {
    // in catch block, always console.log the error and respond with an error object
    console.log(e);
    res.json({
        success: false,
        error: String(e)
    })
}
});

// GET SINGLE BLOG
router.get("/single/:blogTitleToGet", (req, res) => {
   try{
    const blogTitleToGet = req.params.blogTitleToGet;
    //const indexOfBlog = sampleBlogs.findIndex((blog) => {
    //     if (blog.title === blogTitleToGet){
    //         console.log("found match")
    //         return true
    //     } else {
    //         console.log("no match")
    //         return false
    //     }
    // });

    // const foundBlog = sampleBlogs[indexOfBlog];

    const foundBlog = sampleBlogs.find((blog) => {
        if (blog.title === blogTitleToGet){
            console.log("found match")
            return true
            } else {
            console.log("no match")
            return false
       }
    })

    res.json({
        success: true,
        blog: foundBlog
    });
}
catch (e) {
    console.log(e);
    res.json({
        success: false,
        error: String(e)
    })
}
});

// DELETE SINGLE BLOG
router.delete("/single/:blogTitleToDelete", (req, res) => {
    try {
    const blogTitleToDelete = req.params.blogTitleToDelete;
    const indexOfBlog = sampleBlogs.findIndex((blog) => {
        if (blog.title === blogTitleToDelete){
            console.log("found match")
            return true
        } else {
            console.log("no match")
            return false
        }
    });
// if not found, return with false
    if (indexOfBlog < 0) {
        res.json({
          hasBeenDeleted: false
        });
        return;
      };
// delete blog
    sampleBlogs.splice(indexOfBlog, 1)
    res.json({
        hasBeenDeleted: true
    });
} catch (e) {
    console.log(e);
    res.json({
        success: false,
        error: String(e)
    })
}
});

// POST NEW BLOG 
router.post('/create-one', (req, res) => {
   try {
    const title = req.body.title;
    const text = req.body.text;
    const author = req.body.author;
    const category = req.body.category;

    const createBlog = {
        title,
        text,
        author,
        category,
        createdAt: new Date(),
        lastModified: new Date()
    };

const blogCheck = validateBlogData(createBlog);

if (blogCheck.isValid === false){
    res.json({
        success: false,
        message: blogCheck.message
    })
    return;
};

sampleBlogs.push(createBlog);

res.json({
    success: true
  });
} catch (e) {
    // in catch block, always console.log the error and respond with an error object
    console.log(e);
    res.json({
        success: false,
        error: String(e)
    })
}
});

// PUT/UPDATE A NEW BLOG
router.put('/update-one/:blogTitle', (req,res) => {
    try {
    const blogTitle = req.params.blogTitle;

    const blogIndex = sampleBlogs.findIndex((blog) => {
        if (blog.title === blogTitle){
            return true;
        } else {
            return false;
        }
    });

    const originalBlog = sampleBlogs[blogIndex];

    console.log(originalBlog);

    const updatedBlog = {
        title: originalBlog.title,
        text: req.body.text,
        author: req.body.author,
        category: req.body.category,
        createdAt: originalBlog.createdAt,
        lastModified: new Date()
    };

    const updatedBlogCheck = validateBlogData(updatedBlog);

    if (updatedBlogCheck.isValid === false){
        res.json({
            success: false,
            message: updatedBlogCheck.message
        })
        return;
    };


    sampleBlogs[blogIndex] = updatedBlog;

    res.json({
        success: true,
        blog: updatedBlog
      });
    }
    catch (e) {
        // in catch block, always console.log the error and respond with an error object
        console.log(e);
        res.json({
            success: false,
            error: String(e)
        })
    }
})
// Module.exports is listing the variables in this file to send to other files
module.exports = router;