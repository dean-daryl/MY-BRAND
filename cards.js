async function getBlogs() {
  let url = 'https://my-api-kiyi.onrender.com/api/blogs';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
const reactElement = React.createElement;

const Card = () => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    getBlogs().then((blogs) => setBlogs(blogs));
  }, []);

  return reactElement(
    'div',
    {
      className: 'Cards',
    },
    blogs.map((blog) => {
      return reactElement('div', {
        key: blog._id,
        className: 'card',
        style: {
          backgroundImage: `url(${blog.image})`,
          backgroundSize: 'cover',
          backdropFilter: 'blur(5px)',
          backgroundBlendMode: 'multiply',
        },
        onClick: () => {
          window.location.href = `blogview.html#${blog._id}`;
        },
        children: reactElement('div', {
          key: blog._id,
          className: 'card-content',
          children: [
            reactElement('h2', {
              key: blog.title,
              children: [
                reactElement('a', {
                    // supposed to be blog._id
                  key: blog.content,
                  href: `blogview.html#${blog._id}`,
                  style: {
                    textDecoration: 'none',
                    color: 'white',
                  },
                  children: blog.title,
                }),
              ],
            }),
            reactElement('p', {
              key: blog.summary,
              children: blog.summary,
            }),
          ],
        }),
      });
    }),
  );
};

const root = ReactDOM.createRoot(document.querySelector('#cards'));
root.render(reactElement(Card));
