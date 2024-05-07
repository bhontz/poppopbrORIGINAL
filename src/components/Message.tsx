function Message() {
    const name = 'Brad';
    if (name) {
        return <h1>Your Name is {name} right?</h1>
    } else {
        return <h1>Hello World without your name!</h1>
    }
}

export default Message;