const initState = {
  BlogPosts: [
    {
      id: 7,
      title: "Reminder-list",
      content: "React Reminder List App with Redux state management ",
      slug: "first-post",
      url: "https://heuristic-neumann-ad864a.netlify.app/reminder-list/",
    },
    {
      id: 6,
      title: "React Route Parameters",
      content: "Learn how to dynamically link using router params",
      slug: "first-post",
      url: "https://medium.com/@dansimonson/mariposawebnet-28f78caa9bca",
    },
    {
      id: 5,
      title: "Controlled VS. Uncontrolled Input in React.js",
      content:
        "Learn the how, why and when of controlled vs. uncontrolled inputs",
      slug: "second-post",
      url:
        "https://medium.com/@dansimonson/controlled-vs-uncontrolled-input-in-react-js-30b26dc3898d",
    },
    {
      id: 4,
      title: "Compare Vue to React",
      content: "A tale of two frameworks",
      slug: "third-post",
      url: "https://medium.com/@dansimonson/compare-vue-to-react-71af8e5130ed",
    },
    {
      id: 3,
      title: "Easy Modal-Lightbox",
      content: "Create an easy modal lightbox with animation",
      slug: "first-post",
      url: "https://medium.com/@dansimonson/easy-modal-lightbox-136de77f56de",
    },
    {
      id: 2,
      title: "Vue.js Tabs without an added library",
      content: "Create Tabs with Vue.js",
      slug: "second-post",
      url:
        "https://medium.com/@dansimonson/dan-simonson-portfolio-and-blog-7d10f1aba4a7",
    },
    {
      id: 1,
      title: "Passing Props And Mutating State: A family affair",
      content: "State management in Vue.js",
      slug: "first-post",
      url:
        "https://medium.com/@dansimonson/dan-simonson-portfolio-and-blog-e925363f5669",
    },
  ],
};

const BlogReducer = (state = initState, action) => {
  //console.log("state: ", state);
  //console.log("action.type: ", action.type);
  switch (action.type) {
    case "GET_DATA":
      {
        //authenticated: true;
        //return { ...state.BlogPosts, ...action.payload };
        //return state.BlogPosts;
      }
      break;
    case "ADD_DATA":
      {
        //authenticated: false;
        //return state;
        return state.BlogPosts;
      }
      break;
    default:
      return state.BlogPosts;
  }
  //return state.BlogPosts;
};

export default BlogReducer;
