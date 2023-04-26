import profileReducer, {addPostActionCreator} from "./profileReducer";


let initialState = {
    postsData: [
        {id: 1, postText: 'Hi, how are you?', Likes: 12},
        {id: 2, postText: 'Its my first post', Likes: 6}
    ]
}

it('length of posts should be increased', function () {
    let action = addPostActionCreator("New post text")

    let newState = profileReducer(initialState, action);

    expect(newState.postsData.length).toBe(3);
}); 