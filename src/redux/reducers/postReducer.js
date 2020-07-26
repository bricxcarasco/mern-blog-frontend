const initialState = {
    posts: [
        {
            title: "title",
            description: "description",
            postedBy: "Bricx Rain",
            category: {
                categoryName: "coding"
            }
        },
        {
            title: "title2",
            description: "description2",
            postedBy: "Bricx Rain",
            category: {
                categoryName: "coding"
            }
        },
        {
            title: "title2",
            description: "description2",
            postedBy: "Bricx Rain",
            category: {
                categoryName: "coding"
            }
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        default: 
            return state;
    }
}