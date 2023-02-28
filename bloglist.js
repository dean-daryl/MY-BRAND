



// async function getBlogs() {
//   let url = 'https://my-api-kiyi.onrender.com/api/blogs';
//   try {
//     let res = await fetch(url);
//     return await res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }
// const reactElement = React.createElement;
// const Blog = () => {
//   const [blogs, setBlogs] = React.useState([]);
//   React.useEffect(() => {
//     getBlogs().then((blogs) => setBlogs(blogs));
//   }, []);
//   return (
//     'blog',
//     {
//       className: 'blogtable',
//     },
//     blogs.map((blog) => {
//       return reactElement('blogtable', {
//         key: blog.id,
//         children: reactElement('tr', {
//           key: blog.title,
//           children: [
//             reactElement('a', {
//               // supposed to be blog._id
//               key: blog.content,
//               href: `blogview.html#${blog._id}`,
//               style: {
//                 textDecoration: 'none',
//                 color: 'white',
//               },
//             }),
//           ],
//         }),
//       });
//     })
//   );
// };
// const root = ReactDOM.createRoot(document.querySelector('#blogtable'));
// root.render(reactElement(Blog));
