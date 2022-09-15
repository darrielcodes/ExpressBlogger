const validateBlogData = (sampleBlogs) => {
    console.log(sampleBlogs);
    console.log(typeof(sampleBlogs.title))

    if(sampleBlogs.title === undefined || typeof(sampleBlogs.title) !== "string" || sampleBlogs.title.length > 40){
        return {
            isValid: false,
            message: "Title is required, must be a string and 40 characters or less."
		}
    };
    if(sampleBlogs.text === undefined || typeof(sampleBlogs.text) !== "string"){
        return {
            isValid: false,
            message: "Text is required and must be a string."
		}
    };
    if(sampleBlogs.author === undefined || typeof(sampleBlogs.author) !== "string" || sampleBlogs.author.length > 40){
        return {
            isValid: false,
            message: "Author is required, must be a string and 40 characters or less"
		}
    };
    if (sampleBlogs.category !== undefined && sampleBlogs.category.length > 0 && Array.isArray(sampleBlogs.category)) {
        if (sampleBlogs.category.length > 10){
            return {
                isValid: false,
                message: "Category can't have more than 10 categories."
            }
        }
const availableCategories = ["Lorem","ipsum","dolor","sit","amet"];

let isArrayValid = true; 

    sampleBlogs.category.forEach((blogCategory) => {
        if (availableCategories.includes(blogCategory) === false){
            isArrayValid = false;
        }
    });

    if (isArrayValid === false){
        return {
            isValid: false,
            message: "Category can only be one of the following: Lorem,ipsum,dolor,sit,amet."
        }
    };

    const filteredBlogs = sampleBlogs.category.filter((blog) => {
            if (typeof(blog) !== "string"){
                return true
            } else {
                return false
            }
        });

    if (filteredBlogs.length < 0) {
            return {
                isValid: false,
                message: "Category can only have strings."
            }
        }
console.log(filteredBlogs)
    }
    
    return {
		isValid: true
	}
};

module.exports = {
    validateBlogData
};