const qBank = [
    {
        id: 1,
        question: "Which React Hook is commonly used to manage side effects like API calls?",
        options: ["useState", "useEffect", "useReducer", "useContext"],
        answer: "useEffect",
    },
    {
        id: 2,
        question: "What does the useState Hook return in React?",
        options: ["A single value representing the initial state", "An array containing the current state and a function to update it", "An object with various states", "A function that updates the component directly"],
        answer: "An array containing the current state and a function to update it",
    },
    {
        id: 3,
        question: "Which of the following methods is used to pass data from a parent component to a child component in React?",
        options: ["State", "Refs", "Context", "Props"],
        answer: "Props"
    },
    {
        id: 4,
        question: "Which Hook should you use to maintain a variable value that doesn’t cause re-renders when updated?",
        options: ["useEffect", "useMemo", "useState", "useRef"],
        answer: "useRef"
    },
    {
        id: 5,
        question: "Which of these is a proper way to update state based on the previous state in React?",
        options: ["setState(prevState => prevState + 1)", "setState(prevState = prevState + 1)", "setState({ prevState: prevState + 1 })", "setState(prevState, newState => prevState + newState)"],
        answer: "setState(prevState => prevState + 1)"
    },
    {
        id: 6,
        question: "Which lifecycle method is used in class components to perform an action after the component has been updated?",
        options: ["componentDidMount", "componentDidUpdate", "shouldComponentUpdate", "componentWillUnmount"],
        answer: "componentDidUpdate"
    },
    {
        id: 7,
        question: "What does useState manage?",
        options: ["State", "Props", "Context", "Refs"],
        answer: "State"
    },
    {
        id: 8,
        question: "What is used for side effects?",
        options: ["useCallback", "useMemo", "useEffect", "useReducer"],
        answer: "useEffect"
    },
    {
        id: 9,
        question: "What does useContext provide?",
        options: ["State", "Props", "Context", "Lifecycle"],
        answer: "Context"
    },
    {
        id: 10,
        question: "Which Hook is for memoizing values?",
        options: ["useEffect", "useCallback", "useMemo", "useState"],
        answer: "useMemo"
    },
    {
        id: 11,
        question: "Which component does not re-render?",
        options: ["Class", "PureComponent", "Functional", "Stateless"],
        answer: "PureComponent"
    },
    {
        id: 12,
        question: "What does React.Fragment prevent?",
        options: ["Re-renders", "Extra DOM", "Updates", "State"],
        answer: "Extra DOM"
    },
    {
        id: 13,
        question: "What is used for performance optimization?",
        options: ["useReducer", "useCallback", "useEffect", "useContext"],
        answer: "useCallback"
    },
    {
        id: 14,
        question: "What does useRef hold?",
        options: ["State", "Context", "Props", "Mutable"],
        answer: "Mutable"
    },
    {
        id: 15,
        question: "What is the default render behavior?",
        options: ["Static", "Manual", "Dynamic", "Lazy"],
        answer: "Dynamic"
    },
    {
        id: 16,
        question: "Which lifecycle method occurs last?",
        options: ["componentDidUpdate", "render", "componentDidMount", " componentWillUnmount"],
        answer: "componentDidUpdate"
    },
    {
        id: 17,
        question: "What is used for conditional rendering?",
        options: ["If-Else", "Ternary", "Switch", "Loop"],
        answer: "Ternary"
    },
    {
        id: 18,
        question: "What does PropTypes validate?",
        options: ["Props", "State", "Context", "Lifecycle"],
        answer: "Props"
    },
    {
        id: 19,
        question: "What handles routing in React?",
        options: ["Browser", "Route", "Link", "Router"],
        answer: "Router"
    },
    {
        id: 20,
        question: "What triggers re-renders?",
        options: ["State", "All", "Context", "Props"],
        answer: "All"
    }
]

export default qBank;