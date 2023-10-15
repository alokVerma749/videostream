import { useEffect, useState } from "react";

function usePollLiveCommments() {
    // use redux store to store polled array data.
    const comments = [
        'Hello, fellow coder!',
        'Coding is an art.',
        'This function calculates the area of a rectangle.',
        'Water break! 💧',
        'The beauty of well-structured code!',
        'This algorithm finds prime numbers.',
        'Stretch those muscles!',
        'Time to put on my detective hat 🕵️‍♂️',
        'A friend in need is a comment indeed.',
        'Enjoy the process!',
        'Comments make your code more readable.',
        'Code should be self-explanatory',
        'Assumptions are the termites of code.',
        'Bugs teach us valuable lessons.',
        'Follow the trail of comments!',
        'You got this!',
        'What does this function aim to achieve?',
        'The journey of learning never ends.',
        '// Section: Data Fetching',
        'Timing is everything.',
        'Write for the reader.',
        'Consistent code is easy to maintain.',
        'Multi-line comments are great for detailed explanations.',
        'Abstract what\'s complex, clarify what\'s obscure.',
        'Paint with the colors of logic.',
        'What happens when things go off the rails?',
        'Refactoring is the spice of programming life.',
        'Guide yourself and others through your code.',
        'Variables should tell a story on their own.',
        'Code with purpose.',
        'Small functions are easier to understand.',
        'Clarity over cleverness.',
        'What external tools or libraries are you using?',
        'Stack Overflow is your friend.',
        'Comments are like the "why" behind the "what".',
        'Graceful degradation beats crashing.',
        'Indentation matters!',
        'Make it easy for others to use your code.',
        'Readable code is maintainable code.',
        'Testing is not the enemy; it\'s your safety net.',
        'History is important; use version control.',
        'What can be enhanced in the future?',
        'Multi-line comments are like a mini-guide.',
        'Comments should be a last resort.',
        'The best code is no code at all.',
        'Avoid duplication; it leads to confusion.',
        'What\'s the efficiency of your algorithm?',
        'Write code that you\'ll be proud of.',
        'Feedback is a gift; embrace it.',
        'Congratulations! You made it to the end!'
    ];
    const [polledMesaages, setPolledMesaages] = useState(comments);
    useEffect(() => {
        const i = setInterval(() => {
            // pushing new messages into comments;
            const newMessage = "new message " + Math.floor(Math.random() * 100);
            setPolledMesaages(prevMessages => [...prevMessages, newMessage]);
            // clearing extra comments
            if (polledMesaages.length > 70) {
                const newPolledMessages = [...polledMesaages];
                newPolledMessages.splice(0, 50);
                setPolledMesaages(newPolledMessages);
            }
        }, 1000)
        // garbage collection
        return () => clearInterval(i);
    }, [polledMesaages])
    return polledMesaages;
}


export default usePollLiveCommments;