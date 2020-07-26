import { createStore } from 'redux';
import { reducer } from './reducers/indexReducer';

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

export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)