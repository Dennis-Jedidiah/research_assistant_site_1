const Footer = () => {
  return (
    <div className="flex bg-gray-800 text-white h-[20vh] items-center justify-center">
      <p>&copy; 2026 Professor_name All rights reserved.</p>
      <p className="ml-4">
        Header Photo by{" "}
        <a href="https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Christina @ wocintechchat.com M
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/two-women-sitting-on-chair-eF7HN40WbAQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default Footer;
