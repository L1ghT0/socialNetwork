import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";


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

it('message of new post should be correct', function () {
    let action = addPostActionCreator("New post text")

    let newState = profileReducer(initialState, action);

    expect(newState.postsData[2].postText).toBe("New post text");
});

it('after deleting the length of posts should be decreased', function () {
    let action = deletePost(1)

    let newState = profileReducer(initialState, action);

    expect(newState.postsData.length).toBe(1);
});

it(`after deleting the length of posts should not be decreased if id is incorrect`, function () {
    // 1. test data
    let action = deletePost(1000) // '1000' is incorrect id

    // 2. action
    let newState = profileReducer(initialState, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(2);
});