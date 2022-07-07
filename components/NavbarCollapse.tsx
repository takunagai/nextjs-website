const NavbarCollapse = () => {
  return (
    <button
      type="button"
      className="hs-collapse-toggle inline-flex items-center justify-center gap-2 border border-gray-700 p-2 align-middle text-sm text-gray-300 shadow-sm transition-all hover:border-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-slate-900"
      data-hs-collapse="#navbar-collapse-with-animation"
      aria-controls="navbar-collapse-with-animation"
      aria-label="Toggle navigation"
    >
      <svg
        className="h-4 w-4 hs-collapse-open:hidden"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
      <svg
        className="hidden h-4 w-4 hs-collapse-open:block"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </button>
  );
};

export default NavbarCollapse;
