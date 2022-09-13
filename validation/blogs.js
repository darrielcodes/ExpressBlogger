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

    return {
		isValid: true
	}
};

module.exports = {
    validateBlogData
};